import { HttpAuthService } from './auth/httpauth.service';
import { Constants } from './constants';
import { MessageHandlerService } from './messagehandler.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [MessageHandlerService, HttpAuthService , Constants]
})
export class AppComponent {

    constructor(private httpAuth: HttpAuthService, private messageHandler: MessageHandlerService) {}
}
