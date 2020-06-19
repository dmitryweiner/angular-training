import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message} from '../../../interfaces/message';
import {MessageService} from '../../message.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit, OnDestroy {

  messages: Message[];

  intervalId: number;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.messageService
        .getMessages()
        .subscribe(messages => this.messages = messages);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  onSend(message): void {
    this.messageService
      .sendMessage(message)
      .subscribe(messages => this.messages = messages);
  }

}
