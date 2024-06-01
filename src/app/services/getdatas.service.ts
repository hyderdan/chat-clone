import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetdatasService {

  constructor( private http:HttpClient) { }

  getDatas(userId:any){
    return this.http.get(`http://localhost:3000/users/singleUser/${userId}`)
  }
  
}
