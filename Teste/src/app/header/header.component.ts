import { HttpAuthService } from '../auth/httpauth.service';
import { MessageHandlerService } from '../messagehandler.service';
import { Component, OnInit, Input, OnDestroy, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  message: string;
  msgClass: string;

  subscription: Subscription;

  constructor(private httpAuth: HttpAuthService, private messageHandler: MessageHandlerService) { }

  ngOnInit() {
    this.observeMessages();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  observeMessages() {
    this.subscription = this.messageHandler
        .observeMessage()
        .subscribe(msg => {
            this.message = msg.message; this.msgClass = msg.messageType;
        });
  }
}
