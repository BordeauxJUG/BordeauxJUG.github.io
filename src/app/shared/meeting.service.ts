import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Constants } from './constants';
import { Meeting } from './meeting.model';

@Injectable()
export class MeetingService {

  constructor(private http : Http){
  }

  getUpcomingMeetings(): Observable<Meeting[]>{
    let meeting$ = this.http
      .get(`${Constants.BACKEND_URL}/meetings/upcoming`, {headers: this.getHeaders()})
      .map(res => res.json());
    return meeting$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
