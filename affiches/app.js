/* global angular */
'use strict';

var jugModule = angular.module('jugModule', []);

jugModule.controller('mainCtrl', function($scope, $q, $location, SharedData){
    $q.when(SharedData.dataLoaded()).then(function(){
        var id = prompt("id ?");
        $scope.prez = _.find(SharedData.data("prez"), {id: id});
        if(!$scope.prez){
            alert("Invalid id !");
        }
        new QRCode("qrcode", {
          text: $scope.prez.blogURL,
          width: 128,
          height: 128
        });
    }, errorMessage("Cannot load SharedData"));
});

jugModule.config(function($sceProvider) {
  // Completely disable SCE.
  $sceProvider.enabled(false);
});

jugModule.run(function($location, SharedData) {
    SharedData.init({
        offline: false
//             $location.absUrl().indexOf("file://")===0 
//                 || $location.search().offline===true
    });
});

angular.element(document).ready(function() {
    angular.bootstrap(document, ['jugModule']);
});