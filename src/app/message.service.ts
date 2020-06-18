import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Message} from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Message[] = [
    {
      nick: 'Nobody',
      content: 'Test message'
    },
    {
      nick: 'Anonymouse',
      content: 'Another test message'
    }
  ];

  constructor() { }

  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }
}
