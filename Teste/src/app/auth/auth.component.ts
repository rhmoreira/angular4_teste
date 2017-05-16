import { HttpAuthService } from './httpauth.service';
import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { FormsModule, Form, NgForm } from '@angular/forms';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  private authUrl = 'http://localhost:8080/Auth-Rest/api/auth/login';
  // private tokenValidateUrl = 'http://localhost:8080/Auth-Rest/api/auth/token/validate';

  senha: string;
  usuario: User = new User();

  constructor(private httpAuth: HttpAuthService, private http: Http, private router: Router) {}

  ngOnInit() { }

  doLogin(form: NgForm) {
    let params: URLSearchParams  = new URLSearchParams();
    params.append('login', this.usuario.login);
    params.append('senha', this.usuario.senha);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    this.http.put(this.authUrl, params.toString(), options)
             .map(res => res.json())
             .subscribe(token => this.httpAuth.tokenSession = token);
  }

}
