import {Component, OnInit} from '@angular/core';
import {Message} from '../../../interfaces/message';
import {MessageService} from '../../message.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.messageService.getMessages().subscribe(messages => this.messages = messages);
    }, 1000);
  }

  onSend(message): void {
    this.messageService.sendMessage(message);
  }

}
