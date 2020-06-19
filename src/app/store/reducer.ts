import { Message } from '../../interfaces/message';
import { Actions } from './actions';
import {FETCH_MESSAGES, FETCH_MESSAGES_SUCCESS, SEND_MESSAGE, SEND_MESSAGE_SUCCESS} from './types';

export interface AppState {
  readonly messages: Message[];
}

export const initialState: AppState = {
  messages: []
};

export function MessagesReducer(state: AppState = initialState, action: Actions): AppState {
  switch (action.type) {
    case SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    }
    case FETCH_MESSAGES_SUCCESS: {
      return {
        ...state,
        messages: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

