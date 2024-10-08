import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }

  private usernameSource = new BehaviorSubject<string>('');
  currentUsername = this.usernameSource.asObservable();

  private handleUserSM = new BehaviorSubject<boolean>(false);
  currenUserSm = this.handleUserSM.asObservable();

  private handleShowProfile = new BehaviorSubject<any>('');
  currentShowProfile = this.handleShowProfile.asObservable();

  private handleUserProfiledata = new BehaviorSubject<any[]>([]);
  currenthandleUserProfiledata = this.handleUserProfiledata.asObservable();

  private handleToggleChat = new BehaviorSubject<boolean>(true);
  currenthandleToggleChat = this.handleToggleChat.asObservable();

  private handleuserprofile = new BehaviorSubject<any>([]);
  currenthandleuserprofile = this.handleuserprofile.asObservable();

  private HandleUserId = new BehaviorSubject<any>([]);
  currentHandleUserId = this.HandleUserId.asObservable();

  private HandleToggleFav = new BehaviorSubject<any>('');
  currentHandleToggleFav = this.HandleToggleFav.asObservable();

  private HandlePoint = new BehaviorSubject<any>('');
  currrentHandlePoint = this.HandlePoint.asObservable();

  private chatPoint = new BehaviorSubject<any>('');
  currrentchatPoint = this.chatPoint.asObservable();

  private closeProfile = new BehaviorSubject<any>('');
  currrentcloseProfile = this.closeProfile.asObservable();

  private handleClickProfile = new BehaviorSubject<any>('');
  curenthandleClickProfile = this.handleClickProfile.asObservable();

  private profileClickSubject = new Subject<void>();
  profileClick$ = this.profileClickSubject.asObservable();



  changeUsername(username: string) {
    this.usernameSource.next(username);
  };
  handleUsersm(userSm: boolean) {
    this.handleUserSM.next(userSm);
  };
  showProfile(show: any) {
    this.handleShowProfile.next(show);
  };
  handleUserProfile(profile: any) {
    this.handleUserProfiledata.next(profile);
  };

  handletoggleChat(params: boolean) {
    this.handleToggleChat.next(params)
  }
  hendleProfileSharing(params: any) {
    this.handleuserprofile.next(params)
  }
  HandleuserId(param: any) {
    this.HandleUserId.next(param);
  }
  HandleTogglefav(param: any) {
    this.HandleToggleFav.next(param);
  }
  handlePOint(param: any) {
    this.HandlePoint.next(param);
    // console.log('datacount working')
  }
  currrentchatpoint(param: any) {
    this.chatPoint.next(param);
  };
  closeprofile(param: any) {
    this.closeProfile.next(param);
  }

  handleclickprofile(param: any) {
    this.handleClickProfile.next(param);
  }

  triggerProfileClick(){
    this.profileClickSubject.next();
  }

}
