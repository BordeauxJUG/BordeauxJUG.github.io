import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Constants } from './constants';
import { Member } from './member.model';

@Injectable()
export class MemberService {

  constructor(private http : Http){
  }

  getMembers(): Observable<Member[]>{
    let member$ = this.http
      .get(`${Constants.BACKEND_URL}/members`, {headers: this.getHeaders()})
      .map(res => res.json());
    return member$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
