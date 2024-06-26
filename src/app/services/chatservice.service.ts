import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Messages } from '../chat/users/environment/model';
import { io, Socket } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  private apiUrl = 'http://localhost:3000'; 
  private socket: Socket;
  private messagesSubject: BehaviorSubject<Messages[]> = new BehaviorSubject<Messages[]>([]);
  public messages$: Observable<Messages[]> = this.messagesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.socket = io(this.apiUrl);
    
    this.socket.on('new-message', (message: Messages) => {
      const currentMessages = this.messagesSubject.value;
      this.messagesSubject.next([...currentMessages, message]);
    });
   }

  sendmessage(sender_id: any, message: any, receiver_id:any) {
    return this.http.post<any>('http://localhost:3000/send-mes', { sender_id, message, receiver_id });
  }
  getMessages(sender_id:any,receiver_id:any): Observable<Messages[]> {
    return this.http.get<{ [key: string]: Messages }>(`http://localhost:3000/get-mes/${sender_id}/${receiver_id}`,).pipe(
      map(response => {
        if (!response) {
          return [];
        }
        const messages = Object.keys(response).map(key => ({
          key,
          ...response[key]
        }));
        this.messagesSubject.next(messages);
        return messages;
      })
    );
  }

}
