import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  nick = '';
  content = '';

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public onSendHandler: Function;

  onSend(): void {
    const message = {
      nick: this.nick,
      content: this.content
    };
    this.onSendHandler(message);
    this.content = '';
  }

}
