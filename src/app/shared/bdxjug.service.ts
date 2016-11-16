import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Constants } from './constants';
import { Meeting } from './meeting.model';
import { Member } from './member.model';
import { Speaker } from './speaker.model';
import { Sponsor } from './sponsor.model';

@Injectable()
export class BdxjugService {

  constructor(private http : Http){
  }

  getUpcomingMeetings(): Observable<Meeting[]>{
    let meeting$ = this.http
      .get(`${Constants.BACKEND_URL}/meetings/upcoming`, {headers: this.getHeaders()})
      .map(res => res.json());
    return meeting$;
  }

  getPastMeetings(): Observable<Meeting[]>{
    let meeting$ = this.http
      .get(`${Constants.BACKEND_URL}/meetings/past`, {headers: this.getHeaders()})
      .map(res => res.json());
    return meeting$;
  }

  getMembers(): Observable<Member[]>{
    let member$ = this.http
      .get(`${Constants.BACKEND_URL}/members`, {headers: this.getHeaders()})
      .map(res => res.json());
    return member$;
  }

  getSpeakers(): Observable<Speaker[]>{
    let speaker$ = this.http
      .get(`${Constants.BACKEND_URL}/speakers`, {headers: this.getHeaders()})
      .map(res => res.json());
    return speaker$;
  }

  getSponsors(): Observable<Sponsor[]>{
    let sponsor$ = this.http
      .get(`${Constants.BACKEND_URL}/sponsors`, {headers: this.getHeaders()})
      .map(res => res.json());
    return sponsor$;
  }


  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
