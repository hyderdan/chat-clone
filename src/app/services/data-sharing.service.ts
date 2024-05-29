import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public datas = [
    {
      "name": 'hyder',
      "filter": "personal"
    },
    {
      "name": 'rahul',
      "filter": "personal"
    },
    {
      "name": 'manu',

    },
    {
      "name": 'danish',
      "filter": "personal"
    },
    { "name": 'asif' }
  ];

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
  currenthandleuserprofile= this.handleuserprofile.asObservable();
 
  constructor() { }

  changeUsername(username: string) {
    this.usernameSource.next(username);
  };
  handleUsersm(userSm: boolean) {
    this.handleUserSM.next(userSm);
  };
  showProfile(show: boolean) {
    this.handleShowProfile.next(sessionStorage.getItem('username'));
  };
  handleUserProfile(profile: any) {
    this.handleUserProfiledata.next(profile);
  };

  handletoggleChat(params: boolean) {
    this.handleToggleChat.next(params)
  }
  hendleProfileSharing(params:any){
    this.handleuserprofile.next(params)
  }

  
}
