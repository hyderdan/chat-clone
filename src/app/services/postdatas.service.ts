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


}

