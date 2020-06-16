import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChatViewComponent, ChatFormComponent, MessagesListComponent],
  exports: [
    ChatViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ChatModule { }
