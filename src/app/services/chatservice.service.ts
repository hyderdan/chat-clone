import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {
  constructor(private http: HttpClient) { }

  sendmessage(username: any, message: any) {
    this.http.post<any>('http://localhost:3000/send-mes',{username,message});
  }
}
 