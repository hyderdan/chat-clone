import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private usernameSource = new BehaviorSubject<string>('');
  currentUsername = this.usernameSource.asObservable();
  private handleUserSM = new BehaviorSubject<boolean>(false);
  currenUserSm = this.handleUserSM.asObservable();
  private handleShowProfile = new BehaviorSubject<boolean>(true);
  currentShowProfile = this.handleShowProfile.asObservable();

  constructor() { }

  changeUsername(username: string) {
    this.usernameSource.next(username);
  };
  handleUsersm(userSm: boolean) {
    this.handleUserSM.next(userSm);
  }
  showProfile(show: boolean){
    this.handleShowProfile.next(show);
  }


}
