import { Constants } from '../constants';
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

  constructor(private listService: ContatoService) {}

  ngOnInit() { }

  novo(form: NgForm) {
    console.log(form.valid);
    this.listService.novo(this.contato)
                    .subscribe(
                        data => {},
                        (erro: any ) => this.message = Constants.HTTP_STATUS_MSG[erro.status]
                    );
    form.reset();
  }

}
