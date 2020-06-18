import {Component, OnInit} from '@angular/core';
import {Message} from '../../../interfaces/message';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit(): void {
  }

  onSend(message): void {
    console.log('Sending message', message);
  }

}
