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
  private handleShowProfile = new BehaviorSubject<boolean>(true);
  currentShowProfile = this.handleShowProfile.asObservable();
  private handleUserProfiledata = new BehaviorSubject<any[]>(this.datas);
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
    this.handleShowProfile.next(show);
  };
  handleUserProfile(profile: any[]) {
    this.handleUserProfiledata.next(profile);
  };

  handletoggleChat(params: boolean) {
    this.handleToggleChat.next(params)
  }
  hendleProfileSharing(params:any){
    this.handleuserprofile.next(params)
  }

  
}
