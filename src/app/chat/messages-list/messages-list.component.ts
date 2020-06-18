import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../../interfaces/message';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {

  @Input()
  public messages: Message[];

  constructor() { }

  ngOnInit(): void {
  }

}
