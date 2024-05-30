import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RouteGuardService } from '../services/route-guard.service';
import { GetdatasService } from '../services/getdatas.service';
import { PostdatasService } from '../services/postdatas.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  providers: [GetdatasService, PostdatasService],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  username = "";
  userProfile: any
  toggleChat: boolean = true
  constructor(private dataSharing: DataSharingService, private route: Router, private router: ActivatedRoute, private checkLogout: RouteGuardService, private GetDatas: GetdatasService, private PostData: PostdatasService) { }

  ngOnInit(): void {
    // this.handlechatDatas();
    this.handleChat();
    this.getUserProfile()
    this.friendLists();
    this.ToggleShowProfile();
    this.ToggleChangeUserName();
  }
  public datas: any

  user = 'chat'

  handleusername(params: string, params2: any) {
    // this.username = params;
    sessionStorage.setItem('changeUsername', params)
    sessionStorage.setItem('username', params2);
    this.ToggleShowProfile();
    this.ToggleChangeUserName();

  }
  ToggleChangeUserName() {
    const Data: any = sessionStorage.getItem('changeUsername')
    this.dataSharing.changeUsername(Data);

  }
  ToggleShowProfile() {
    const back: any = sessionStorage.getItem('username');
    this.dataSharing.showProfile(back);

  }
  handlechat(params: string, params2: string, params3: string) {
    sessionStorage.setItem('changeUsername', params2)
    sessionStorage.setItem('username', params3);
    this.ToggleShowProfile();
    this.ToggleChangeUserName();
    this.route.navigate([params]);


  }
  friendLists() {
    const userid = sessionStorage.getItem('userId')
    this.PostData.friendList(userid).subscribe(
      res => {
        console.log(res.friendList)
        this.datas = res.friendList
      }
    )
  }

  // handlechatDatas() {
  //   this.dataSharing.currenthandleUserProfiledata.subscribe(chatdatas => {
  //     this.datas = chatdatas;
  //     console.log(this.datas);
  //   })
  // }
  handleChat() {
    this.dataSharing.currenthandleToggleChat.subscribe(data => {
      this.toggleChat = data;
      console.log(data);
    })
  }
  logOut() {
    this.checkLogout.logout();
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('isAuthenticated')
    this.route.navigate(['login']);
  }

  getUserProfile() {
    const userprofileId = sessionStorage.getItem('userId');
    console.log(userprofileId, 'hello')
    this.GetDatas.getDatas(userprofileId).subscribe(
      (data: any) => {
        this.userProfile = data.userdata;
        console.log(this.userProfile)
      },
      error => {
        console.log(error);
      }
    );
  }





}


