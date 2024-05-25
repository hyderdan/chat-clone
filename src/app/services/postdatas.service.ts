import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostdatasService {

  constructor(private http: HttpClient) { }

  postDatas(username: string, phoneNo: number, password: string, confirmPass: string) {
    return this.http.post<any>('http://localhost:3000/users/sigUp', { username, phoneNo, password, confirmPass })
  }
  loginUser(phoneNo: number, password: string) {
    return this.http.post<any>('http://localhost:3000/users/login', { phoneNo, password })
  }
  SearchUser(userName:string){
    return this.http.post<any>('http://localhost:3000/users/searchUser',{userName});
  }
  AddToFriendList(friend_id:string,ID:any){
    return this.http.post(`http://localhost:3000/users/AddFriend/${ID}`,{friend_id})
  }
  friendList(userid:any){
    return this.http.get(`http://localhost:3000/users/friendList/${userid}`)
  }
}

