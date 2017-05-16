import { Constants } from '../constants';
import { Contato } from './contato.class';
import { ContatoService } from './contato.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './list.contato.component.html',
  styleUrls: ['./contato.component.css'],
  providers: [ContatoService]
})
export class ListContatoComponent implements OnInit {

  contatos: Contato[];
  errorMessage: string;

  constructor(private listService: ContatoService) {}

  ngOnInit() {
  }

  list() {
      this.listService.list()
          .subscribe(
            contatos => this.contatos = contatos,
            (error: any) => this.errorMessage = Constants.HTTP_STATUS_MSG[error.status]
          );
  }

  remove(id: number) {
    this.listService.remove(id)
                    .subscribe(
                      data => {},
                      (error: any) => this.errorMessage = Constants.HTTP_STATUS_MSG[error.status]
                    );
  }
}
