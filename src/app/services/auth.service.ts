import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) { }

  login(username, password) {
    // send a post request to the server
    return this.http.post('/api/login', {username: username, password: password}).map(response => response.json())
  }
}
