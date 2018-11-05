import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ChannelService {

  uri = 'http://127.0.0.1:3000';

  constructor(private _http: HttpClient) { }

  listChannels() {
    return this._http.get(`${this.uri}/channels`, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }



}
