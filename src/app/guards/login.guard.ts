import { CanActivateFn, Router } from '@angular/router';
import {  inject } from '@angular/core';
import { RouteGuardService } from '../services/route-guard.service';
export const loginGuard: CanActivateFn = (route, state) => {
 
 const loginService = inject(RouteGuardService);
 const router = inject(Router);

 if(loginService.isLoggedIn()){
  return true;
 }else {
  router.navigate(['login']);
  return false;
}
  
};
