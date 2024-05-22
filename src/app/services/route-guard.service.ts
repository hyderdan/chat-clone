import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {
  
  private isAuthenticated: boolean = false;

  constructor() { 
    this.loadLoginCheck();
  }

  login(params:boolean): void {
    this.isAuthenticated = params;
    sessionStorage.setItem('isAuthenticated',params.toString())
  }
  logout(): void {
    this.isAuthenticated = false;
    sessionStorage.removeItem('isAuthenticated');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  private loadLoginCheck():void{
  const LoginCheck = sessionStorage.getItem('isAuthenticated');
  this.isAuthenticated = LoginCheck === 'true'

  }
  
}
