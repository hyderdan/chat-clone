import { Component, OnInit } from '@angular/core';
import { ChatComponent } from '../chat.component';
import { DataSharingService } from '../../services/data-sharing.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostdatasService } from '../../services/postdatas.service';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ChatComponent, FontAwesomeModule, CommonModule, FormsModule],
  providers: [PostdatasService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(private dataSharing: DataSharingService, private router: Router, private PostService: PostdatasService) { };
  getValues = "";
  GetUserId = ""
  public Gooback: any = '';
  checkGoBack: any = 'false';
  public faPlane = faPaperPlane;
  faarrowleft = faArrowLeft;
  chatSend = '';
  favourates = faStar;
  ngOnInit(): void {
    this.getName();
    this.getShowProfile();
    this.ToggleChangeUserName();
    this.ToggleShowProfile();
  }
  goBAck(params: string) {
    const back: boolean = false;
    this.router.navigate([params]);
    this.dataSharing.showProfile(true);
    this.ToggleGoback();
  }
  ToggleGoback() {
    sessionStorage.setItem('username', 'false')
    this.checkGoBack = sessionStorage.getItem('username');

  }
  ToggleChangeUserName() {
    const Data: any = sessionStorage.getItem('changeUsername')
    this.dataSharing.changeUsername(Data);

  }
  ToggleShowProfile() {
    const back: any = sessionStorage.getItem('username');
    this.dataSharing.showProfile(back);

  }
  getName() {
    this.dataSharing.currentUsername.subscribe(username => {
      this.getValues = username;
    });
    this.dataSharing.currentHandleUserId.subscribe(data => {
      this.GetUserId = data;
    });
  }
  getShowProfile() {
    //  sessionStorage.getItem('username');
    this.dataSharing.currentShowProfile.subscribe(showProfile => {
      this.checkGoBack = showProfile
      console.log("h", this.checkGoBack);
    });

  }
  HandleFavourate(param: any,) {
    console.log("userId:", param);
    const profileId = sessionStorage.getItem('userId')
    console.log("usernam:", profileId);
    this.PostService.AddTOFavourate(param, profileId).subscribe(data => {
      alert(data.message);
    })
  }

}
