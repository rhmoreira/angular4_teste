import { Token } from './token';
import { User } from './user';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class HttpAuthService {

    tokenSession: Token;

    constructor(private http: Http) { }

    get(url, queryParams?) {
      return this.http.get(url, this.prepareOptions(queryParams));
    }
    post(url, data) {
      return this.http.post(url, data, this.prepareOptions());
    }
    delete(url, queryParams?) {
      return this.http.delete(url, this.prepareOptions(queryParams));
    }
    put(url, data) {
      return this.http.put(url, data, this.prepareOptions());
    }

    private prepareOptions(queryParams?) {
      const options = {
        search: queryParams,
        headers: this.createAuthHeader()
      };
      return options;
    }

    createAuthHeader() {
      let headers = new Headers();
      if (this.tokenSession && this.tokenSession.token) {
        headers.append('Authorization', 'Basic ' + this.tokenSession.token);
      }
      return headers;
    }
}
