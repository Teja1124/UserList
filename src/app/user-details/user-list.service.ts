import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { UserListModel } from './../common/user-list.model';

@Injectable()
  export class userListService {

    constructor(private http: HttpClient) {}

    userListUrl = "./assets/userlist.json";

    getUserDetails(): Observable<UserListModel> {
      return this.http.get<UserListModel>(this.userListUrl, {responseType: 'json'});
    }

}

