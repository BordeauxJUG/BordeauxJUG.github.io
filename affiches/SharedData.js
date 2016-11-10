"use strict";

angular.module('jugModule').factory('SharedData', function ($q, $http, $sce, SpreadsheetReader) {
    var SharedData = {
        SPREADSHEETS: [
            {
                tabId: 1,
                dataField: "prez",
                descriptor: {
                    "firstRow": 3,
                    "columnFields": {
                        "A": "id", "B": "monthDay", "C": "month",
                        "D": "speakerName", "E": "title",  "F": "intro", 
                        "G": "description", "H": "speakerAvatar", "I": "studentFriendly",
                        "J": "sponsor1URL", "K": "sponsor1Style",
                        "L": "sponsor2URL", "M": "sponsor2Style",
                        "N": "sponsor3URL", "O": "sponsor3Style",
                        "P": "sponsor4URL", "Q": "sponsor4Style",
                        "R": "blogURL", "S": "registrationMarginLeft", "T": "weekDay", 
                        "U": "location", "V": "hour", 
                        "W": "sponsor5URL", "X": "sponsor5Style"
                    },
                    "fieldsRequiredToConsiderFilledRow": [ "id" ],
                    "sortBy": [ "id" ]
                }
            }
        ],
        _data: {},
        _dataLoadedDefer: $q.defer(),
        init: function(opts) {
            var self = this;
            var defer = $q.defer();

            var urlFactory = function(tabId) {
                return opts.offline
                    ?"./mockedSpreadsheet"+tabId+".json?callback=JSON_CALLBACK"
                    :"https://spreadsheets.google.com/feeds/cells/1iL_v5zK8wb8tnFfwgOAriyQe6SAyrVZG2HFGlQ6R4YM/"+tabId+"/public/basic?alt=json&callback=JSON_CALLBACK&v=3.0";
            };

            var fetchPromises = _.map(SharedData.SPREADSHEETS, function(spreadsheet){
                return $http.jsonp(urlFactory(spreadsheet.tabId),{}).then(function(spreadsheetQueryResult){
                    return SpreadsheetReader.read(spreadsheetQueryResult.data, spreadsheet.descriptor);
                }, errorMessage("Error while fetching spreadsheet info for tab "+spreadsheet.tabId));
            });

            var spreadsheetsFetched = $q.defer();
            $q.all(fetchPromises).then(function(spreadsheetInfos) {
                _.each(spreadsheetInfos, function(spreadsheetInfo, idx){
                    self._data[SharedData.SPREADSHEETS[idx].dataField] = spreadsheetInfo;
                });
                spreadsheetsFetched.resolve();
            }, rejectDeferred(spreadsheetsFetched, "Error while fetching spreadsheet data"));


            $q.all([
                spreadsheetsFetched.promise
            ]).then(function(){
                _.each(self._data['prez'], function(prez) {
                    prez.sponsors = [];
                    for(var i=1; i<=5; i++){
                        if(prez['sponsor'+i+'URL']) {
                            prez.sponsors.push({
                                url: prez['sponsor'+i+'URL'],
                                style: self._extractStyleObj(prez['sponsor'+i+'Style'])
                            });
                        }
                    }
                    prez.intro = $sce.trustAsHtml(prez.intro);
                    prez.description = $sce.trustAsHtml(prez.description);
                    prez.studentFriendly = (prez.studentFriendly.toUpperCase()==="O");
                    prez.registrationStyle = { "margin-left": prez.registrationMarginLeft };
                });

                self._dataLoadedDefer.resolve();
                defer.resolve();
            }, rejectDeferred(defer, "Error while fetching data"));

            return defer.promise;
        },
        _extractStyleObj: function(styleStr) {
            var style = {};
            var splittedStyles = styleStr.split(";");
            _.each(splittedStyles, function(splittedStyle){
                if(splittedStyle.trim()) {
                    style[splittedStyle.split(":")[0].trim()] = splittedStyle.split(":")[1].trim();
                }
            });
            return style;
        },
        data: function(key) {
            return this._data[key]?_.cloneDeep(this._data[key]):null;
        },
        dataLoaded: function(){
            return this._dataLoadedDefer.promise;
        }
    };
    return SharedData;
});

