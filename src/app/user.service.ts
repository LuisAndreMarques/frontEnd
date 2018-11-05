import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class UserService {

  uri = 'http://127.0.0.1:3000';

  constructor(private _http: HttpClient) { }

  register(body: any) {
    return this._http.post(`${this.uri}/users/register`, body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body: any) {
    return this._http.post(`${this.uri}/users/login`, body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  dashboard() {
    return this._http.get(`${this.uri}/users/dashboard`, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  logout() {
    return this._http.get(`${this.uri}/users/logout`, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }
}
