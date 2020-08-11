import { Injectable } from '@angular/core';
import { IUser } from '../Models/Index';
import { map } from 'rxjs/operators';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class UserService {

  constructor(private _http: Http) { }
  users: IUser[];
  getUsers() {
    let myHeaders = new Headers();
    myHeaders.set('Access-Control-Allow-Origin', 'https://localhost:44391/api/User/GetAllUsers');
    myHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


    let tempVar = this._http.get('https://localhost:44391/api/User/GetAllUsers', { headers: myHeaders });
    return tempVar.pipe(map((response: any) => response.json()));
  }
  addUserinAPI(user: User) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', 'https://localhost:44391/api/User/PostUser/');
    let options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    let body = JSON.stringify(user);
    return this._http.post('https://localhost:44391/api/User/PostUser/', body, options)
      .pipe(map((res: Response) => res.json()));
  }
  editUserinAPI(user: User) {
    var myheaders = new Headers();
    myheaders.set('Access-Control-Allow-Origin', 'https://localhost:44391/api/User/Put/');
    myheaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ method: RequestMethod.Put, headers: myheaders });
    let body = JSON.stringify(user);
    return this._http.put('https://localhost:44391/api/User/Put/', body, options)
      .pipe(map((res: Response) => res.json()));
  }
  deleteUserinAPI(user: User) {
    let url: string = 'https://localhost:44391/api/User/delete_user/';
    var headers = new Headers();
    headers.set('Access-Control-Allow-Origin', 'https://localhost:44391/api/User/delete_user/');
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(user);
    let options = new RequestOptions({ method: RequestMethod.Delete, headers: headers, body: body });
    return this._http.delete(url, options)
      .pipe(map((res: Response) => res.json()));
  }
}
export interface User {
  UserId: number;
  UserName: string;
  EmailId: string
  Role: string;
  status: string;
}
export enum RequestMethod {
  Get,
  Post,
  Put,
  Delete,
  Options,
  Head,
  Patch
}
