import { Component, OnInit } from '@angular/core';
import { ChatComponent } from '../chat.component';
import { DataSharingService } from '../../services/data-sharing.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostdatasService } from '../../services/postdatas.service';
import { GetdatasService } from '../../services/getdatas.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { provideDatabase, getDatabase } from '@angular/fire/database'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../users/environment/environment'
import { ChatserviceService } from '../../services/chatservice.service';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ChatComponent, FontAwesomeModule, CommonModule, FormsModule,  // Initialize AngularFire
  ],
  providers: [PostdatasService, ChatserviceService,],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(private dataSharing: DataSharingService, private router: Router, private PostService: PostdatasService, private GetDatas: GetdatasService,
    private chatService: ChatserviceService
  ) { };
  getValues = "";
  GetUserId = ""
  ToggleStar = true
  HandleToggleStar: any = [];
  FavourateDatas: any;
  public Gooback: any = '';
  checkGoBack: any = 'false';
  public faPlane = faPaperPlane;
  faarrowleft = faArrowLeft;
  chatSend = '';
  favourates = faStar;
  messages: any = []
  username: any = 'hellofaker'
  message: any = '';
  ngOnInit(): void {
    this.getName();
    this.getShowProfile();
    this.ToggleChangeUserName();
    this.ToggleShowProfile();
    this.GetFavourate();
   

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
      console.log(data.message);
      window.location.reload();
      this.GetFavourate();
    })
  }
  GetFavourate() {
    this.GetDatas.GetFavouratesId(sessionStorage.getItem('userId')).subscribe(
      (data: any) => {
        // this.FavourateDatas = data.Favourates;
        this.HandleToggleStar = data.FavId
        console.log(this.HandleToggleStar);
      }, error => {
        console.log(error);
      }
    )
  }

  sendMessage() {
    if (this.message.trim()) {
      this.chatService.sendmessage(this.username, this.message).subscribe(
        (response: any) => {
          console.log('Message sent successfully:', response);
          this.message = '';
          this.getMess();
            // Clear the input field after sending the message
        },
        (error: any) => {
          console.error('Error sending message:', error);
        }
      );
    }
  }
  getMess(){
    this.chatService.getMessages().subscribe((mes) => {
      this.messages = mes;
      console.log(this.messages);
    })
  }

}
