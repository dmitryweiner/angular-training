import {Action} from '@ngrx/store';
import {FETCH_MESSAGES, FETCH_MESSAGES_SUCCESS, SEND_MESSAGE, SEND_MESSAGE_SUCCESS} from './types';
import {Message} from '../../interfaces/message';

export class fetchMessages implements Action {
  readonly type = FETCH_MESSAGES;
  constructor() {}
}

export class fetchMessagesSuccess implements Action {
  readonly type = FETCH_MESSAGES_SUCCESS;
  constructor(public payload: Message[]) {}
}

export class sendMessage implements Action {
  readonly type = SEND_MESSAGE;
  constructor(public payload: Message) {}
}

export class sendMessageSuccess implements Action {
  readonly type = SEND_MESSAGE_SUCCESS;
  constructor(public payload: Message) {}
}

export type Actions =
  fetchMessages |
  fetchMessagesSuccess |
  sendMessage |
  sendMessageSuccess;
