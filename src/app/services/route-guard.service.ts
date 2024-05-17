import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {
  
  private isAuthenticated: boolean = false;

  constructor() { }

  login(): void {
    this.isAuthenticated = true;
  }
  logout(): void {
    this.isAuthenticated = false
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
