import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  private isAuthenticated: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadLoginCheck();
  }

  login(params: boolean): void {
    this.isAuthenticated = params;
    // sessionStorage.setItem('isAuthenticated',params.toString())
  }
  logout(): void {
    this.isAuthenticated = false;
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('changeUsername');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('isFavurate');


  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  private loadLoginCheck(): void {
   
      const loginCheck = sessionStorage.getItem('isAuthenticated');
      this.isAuthenticated = loginCheck === 'true';
  }

}
