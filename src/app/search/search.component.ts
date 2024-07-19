import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { PostdatasService } from '../services/postdatas.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus, faLock } from '@fortawesome/free-solid-svg-icons';
import { DataSharingService } from '../services/data-sharing.service';
import { SockectservicesService } from '../services/sockectservices.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  providers: [PostdatasService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  toggleloader = true;
  addUser = faUserPlus;
  removeFreind = faLock
  searachInput: string = ""
  FriendListIds: any = [];
  users: any[] = [];
  friend: any[] = [];
  CompareID: any = [];

  constructor(private postdatas: PostdatasService, private DS: DataSharingService, private postDatas: PostdatasService
    , private SockectService: SockectservicesService
  ) { }
  ngOnInit(): void {
    this.SockectService.on('friendListUpdate', (data: any) => {
      // console.log('Friend list updated:', data);
      this.handleNewChatpoint(data);
      this.friendLists();

    });
    this.friendLists();

  }
  handleNewChatpoint(data:any){
    this.DS.handlePOint(data.newChat)
    sessionStorage.setItem('new-chat',data.newChat)
  }
  handleSearch() {
    this.toggleloader = false
    setTimeout(() => {
      this.toggleloader = true
      this.postdatas.SearchUser(this.searachInput).subscribe(
        res => {
          // console.log(res.data);
          this.users = res.data;
          // this.CompareID = res.filterId
          // console.log(this.CompareID)
        }
      )
    }, 500);
  }

  AddToFreindLIst(param: any) {
    const ID = sessionStorage.getItem('userId');
    // console.log(ID);
    this.postdatas.AddToFriendList(param, ID).subscribe(
      (data: any) => {
        alert(data.mes)
        // console.log(data.message);
        // sessionStorage.setItem('new-chat', data.newChat);
        this.friendLists();
      }
    )

  }
  friendLists() {
    const userid = sessionStorage.getItem('userId')
    this.postDatas.friendList(userid).subscribe(
      res => {
        // console.log(this.CompareID)
        this.CompareID = res.friendId
      }
    )
  }


}
