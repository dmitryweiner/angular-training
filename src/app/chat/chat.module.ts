import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { MessagesListComponent } from './messages-list/messages-list.component';



@NgModule({
  declarations: [ChatViewComponent, ChatFormComponent, MessagesListComponent],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
