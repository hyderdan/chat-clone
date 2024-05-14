import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  username = "";

  constructor(private dataSharing: DataSharingService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.handlechatDatas();
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

}


