import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message} from '../../../interfaces/message';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducer';
import {fetchMessages, sendMessage} from '../../store/actions';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit, OnDestroy {

  state$: Observable<any>;

  messages: Message[];

  intervalId: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.state$ = this.store.select('messages');
    this.intervalId = setInterval(() => {
      this.store.dispatch(new fetchMessages());
    }, 1000);
    this.state$.subscribe((state: AppState) => this.messages = state.messages);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  onSend(message): void {
    this.store.dispatch(new sendMessage(message));
  }

}
