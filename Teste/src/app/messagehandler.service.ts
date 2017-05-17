import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageHandlerService {

  messageSubject: Subject<any> = new Subject();

  constructor() {
  }

  observeMessage() {
    return this.messageSubject.asObservable();
  }
  public setMessage(message: string, messageType: string) {
    this.setMessage0(message, messageType);
  }

  private setMessage0(message: string, messageType: string) {
    this.messageSubject.next({message: null, messageType: null});
    setTimeout(() => {
      this.messageSubject.next({message: message, messageType: messageType});
    }, 10);
  }
}
