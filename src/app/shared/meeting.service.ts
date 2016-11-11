import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Meeting} from './meeting.model';

@Injectable()
export class MeetingService {
  private baseUrl: string = 'http://bdxjug-api.cleverapps.io/api';

  constructor(private http : Http){
  }

  getUpcomingMeetings(): Observable<Meeting[]>{
    let meeting$ = this.http
      .get(`${this.baseUrl}/meetings/upcoming`, {headers: this.getHeaders()})
      .map(res => res.json());
    return meeting$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
