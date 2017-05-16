import { HttpAuthService } from '../auth/httpauth.service';
import { Contato } from './contato.class';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ContatoService {

  private apiUrl = 'http://localhost:8080/Angular-Rest/api/Contato';

  constructor(private http: HttpAuthService) { }

  list(): Observable<Contato[]> {
    return this.http.get(this.apiUrl)
                    .map(res => res.json() || []);
  }

  novo(contato) {
    return this.http.post(this.apiUrl, contato);
  }

  remove(id: number) {
    return this.http.delete(this.apiUrl, {id: id});
  }
}
