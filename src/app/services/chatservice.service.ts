import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Messages } from '../chat/users/environment/model'


@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {
  constructor(private http: HttpClient) { }

  sendmessage(username: any, message: any) {
    return this.http.post<any>('http://localhost:3000/send-mes', { username, message });
  }
  getMessages(): Observable<Messages[]> {
    return this.http.get<{ [key: string]: Messages }>('http://localhost:3000/get-mes').pipe(
      map(response => {
        if (!response) {
          return [];
        }
        return Object.keys(response).map(key => ({
          key,
          ...response[key]
        }));
      })
    );
  }

}
