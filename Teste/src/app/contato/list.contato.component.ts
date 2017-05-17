import { Constants } from '../constants';
import { MessageHandlerService } from '../messagehandler.service';
import { Contato } from './contato.class';
import { ContatoService } from './contato.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './list.contato.component.html',
  styleUrls: ['./contato.component.css'],
  providers: [ContatoService]
})
export class ListContatoComponent implements OnInit {

  contatos: Contato[];

  constructor(private listService: ContatoService, private msgHandler: MessageHandlerService) {}

  ngOnInit() {
  }

  list() {
      this.listService.list()
          .subscribe(
            contatos => this.contatos = contatos,
            error => this.msgHandler.setMessage(error.json().message, Constants.ERROR)
          );
  }

  remove(index: number) {
    this.listService.remove(this.contatos[index].id)
                    .subscribe(
                      data => {
                        this.contatos.splice(index, 1);
                        this.msgHandler.setMessage(data.json().message, Constants.SUCCESS);
                      },
                      error => this.msgHandler.setMessage(error.json().message, Constants.ERROR)
                    );
  }
}
