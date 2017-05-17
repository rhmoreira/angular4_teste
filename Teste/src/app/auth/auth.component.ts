import { Constants } from '../constants';
import { MessageHandlerService } from '../messagehandler.service';
import { HttpAuthService } from './httpauth.service';
import { User } from './user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, Form, NgForm } from '@angular/forms';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  private authUrl = 'http://localhost:8080/Auth-Rest/api/auth/login';
  private tokenValidateUrl = 'http://localhost:8080/Auth-Rest/api/auth/token/validate';
  private tokenRefreshUrl = 'http://localhost:8080/Auth-Rest/api/auth/token/refresh';

  senha: string;
  usuario: User = new User();

  constructor(private httpAuth: HttpAuthService, private http: Http, private msgHandler: MessageHandlerService) { }

  ngOnInit() { }

  doLogin(form: NgForm) {
    let params: URLSearchParams = new URLSearchParams();
    params.append('login', this.usuario.login);
    params.append('senha', this.usuario.senha);

    this.call(this.authUrl, params.toString())
      .subscribe(
        token => this.httpAuth.tokenSession = token,
        error => this.msgHandler.setMessage(error.json().message, Constants.ERROR)
      );
  }

  refreshToken() {
    let params: URLSearchParams = new URLSearchParams();
    params.append('token', this.usuario.login);
    params.append('senha', this.usuario.senha);

    this.call(this.tokenRefreshUrl, params.toString())
      .subscribe(
        token => {},
        error => this.msgHandler.setMessage(error.json().message, Constants.ERROR)
      );
  }

  private call(url: string, body: string) {
    return this.http.put(this.authUrl, body, this.createHeaders())
               .map(res => res.json());
  }

  private createHeaders() {
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
     let options = new RequestOptions({ headers: headers });
     return options;
  }

}
