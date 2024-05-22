import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RouteGuardService } from '../services/route-guard.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  username = "";
  toggleChat: boolean = true

  constructor(private dataSharing: DataSharingService, private route: Router, private router: ActivatedRoute, private checkLogout: RouteGuardService) { }

  ngOnInit(): void {
    this.handlechatDatas();
    this.handleChat();
  }
  public datas: any
  // public datas = [
  //   { "name": 'hyder',
  //     "filter": "personal"
  //    },
  //   { "name": 'rahul',
  //   "filter": "personal"
  //    },
  //   { "name": 'manu',

  //    },
  //   { "name": 'danish',
  //   "filter": "personal"
  //    },
  //   { "name": 'asif' }
  // ];
  user = 'chat'

  handleusername(params: string) {
    // this.username = params;
    this.dataSharing.changeUsername(params);
    const back: boolean = false;
    this.dataSharing.showProfile(back);



  }
  handlechat(params: string, params2: string) {
    this.dataSharing.changeUsername(params2);
    const toggleChat: boolean = true;
    this.route.navigate([params]);
    this.dataSharing.handleUsersm(toggleChat);
    const back: boolean = false;
    this.dataSharing.showProfile(back);

  }
  handlechatDatas() {
    this.dataSharing.currenthandleUserProfiledata.subscribe(chatdatas => {
      this.datas = chatdatas;
      console.log(chatdatas);
    })
  }
  handleChat() {
    this.dataSharing.currenthandleToggleChat.subscribe(data => {
      this.toggleChat = data;
      console.log(data);
    })
  }
  logOut(){
    this.checkLogout.logout();
    this.route.navigate(['login']);
  }

}


