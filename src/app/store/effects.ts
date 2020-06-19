import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import {MessageService} from '../message.service';
import * as actions from './actions';
import * as types from './types';

@Injectable({
  providedIn: 'root'
})
export class MessagesEffects {
  constructor(private messageService: MessageService,
              private actions$: Actions
  ) {}

  @Effect() fetchMessages$: Observable<Action> = this.actions$.pipe(
    ofType<actions.fetchMessages>(types.FETCH_MESSAGES),
    mergeMap(() => this.messageService.getMessages().pipe(
      map(messages => (new actions.fetchMessagesSuccess(messages)))
    ))
  );

  @Effect() sendMessage$: Observable<Action> = this.actions$.pipe(
    ofType<actions.sendMessage>(types.SEND_MESSAGE),
    mergeMap(action => this.messageService.sendMessage(action.payload).pipe(
      map(messages => (new actions.sendMessageSuccess(action.payload)))
    ))
  );

}
