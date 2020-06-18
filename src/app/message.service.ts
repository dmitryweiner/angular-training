import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Message} from '../interfaces/message';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:3001/';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }

  sendMessage(message: Message): Observable<Message[]> {
    return this.http.post<Message[]>(this.apiUrl, JSON.stringify(message));
  }
}
