import { Injectable } from '@angular/core';
import { io } from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SockectservicesService {
  private socket: any;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  emit(evenName: any, data: any) {
    this.socket.emit(evenName, data)
  }; 
 
  on(evenName: any, callBack: any){
    this.socket.on(evenName,(data:any)=>{
      callBack(data);
    });
  };

  disconnect(){
    if(this.socket){
      this.socket.disconnect();
    }
  }
}
