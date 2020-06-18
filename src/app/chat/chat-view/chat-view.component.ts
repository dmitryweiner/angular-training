import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSend(message): void {
      console.log('Sending message', message);
  }

}
