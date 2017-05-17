import { Constants } from '../constants';
import { MessageHandlerService } from '../messagehandler.service';
import { ContatoService } from './contato.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, Form, NgForm } from '@angular/forms';
import { Contato } from './contato.class';

@Component({
  templateUrl: './novo.contato.component.html',
  styleUrls: ['./contato.component.css'],
  providers: [ContatoService]
})
export class NovoContatoComponent implements OnInit {

  message: string;
  contato: Contato = new Contato();
  uf = Constants.UF;

  constructor(private listService: ContatoService, private msgHandler: MessageHandlerService) {}

  ngOnInit() { }

  novo(form: NgForm) {
    console.log(form.valid);
    this.listService.novo(this.contato)
                    .subscribe(
                        data => this.msgHandler.setMessage(data.json().message, Constants.SUCCESS),
                        error => this.msgHandler.setMessage(error.json().message, Constants.ERROR)
                    );
    form.reset();
  }

}
