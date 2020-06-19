import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatViewComponent} from './chat/chat-view/chat-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'chat', component: ChatViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
