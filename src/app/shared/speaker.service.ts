import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Constants } from './constants';
import { Speaker } from './speaker.model';

@Injectable()
export class SpeakerService {

  constructor(private http : Http){
  }

  getSpeakers(): Observable<Speaker[]>{
    let speaker$ = this.http
      .get(`${Constants.BACKEND_URL}/speakers`, {headers: this.getHeaders()})
      .map(res => res.json());
    return speaker$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
