import { Token } from './token';
import { User } from './user';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpAuthService {

    tokenSession: Token;

    constructor(private http: Http) { }

    get(url, queryParams?): Observable<Response> {
      return this.http.get(url, this.prepareOptions(queryParams));
    }
    post(url, data): Observable<Response> {
      return this.http.post(url, data, this.prepareOptions());
    }
    delete(url, queryParams?): Observable<Response> {
      return this.http.delete(url, this.prepareOptions(queryParams));
    }
    put(url, data): Observable<Response> {
      return this.http.put(url, data, this.prepareOptions());
    }

    private prepareOptions(queryParams?): any {
      const options = {
        search: queryParams,
        headers: this.createAuthHeader()
      };
      return options;
    }

    createAuthHeader(): Headers {
      let headers = new Headers();
      if (this.tokenSession && this.tokenSession.token) {
        headers.append('Authorization', 'Basic ' + this.tokenSession.token);
      }
      return headers;
    }
}
