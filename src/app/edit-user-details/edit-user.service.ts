import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/Rx';

import { UserDetails } from './../common/user-list.model';

@Injectable()
export class editListService {

  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getUserDetail(id:number): Observable<UserDetails> {
    return this.http.get<UserDetails>(`./assets/${id}.json`, {responseType: 'json'});
  }

  updateUserDetails(UserDetails:UserDetails): Observable<UserDetails>{
    return this.http.get<UserDetails>(`./assets/1.json`,UserDetails);

   // return this.http.patch<UserDetails>(`./assets/1.json`,UserDetails);
  }



}

