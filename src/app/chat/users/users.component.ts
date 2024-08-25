import { Component, OnInit, ElementRef, AfterViewChecked, ViewChild } from '@angular/core';
import { ChatComponent } from '../chat.component';
import { DataSharingService } from '../../services/data-sharing.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostdatasService } from '../../services/postdatas.service';
import { GetdatasService } from '../../services/getdatas.service';
import { ChatserviceService } from '../../services/chatservice.service';
import { error } from 'node:console';
import { ThemechangeService } from '../../services/themechange.service';
import { SockectservicesService } from '../../services/sockectservices.service';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ChatComponent, FontAwesomeModule, CommonModule, FormsModule,    // Initialize AngularFire
  ],
  providers: [PostdatasService, ChatserviceService, GetdatasService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit, AfterViewChecked {
  constructor(private dataSharing: DataSharingService, private router: Router, private PostService: PostdatasService, private GetDatas: GetdatasService,
    private chatService: ChatserviceService, private themechange: ThemechangeService,
    private SockectService: SockectservicesService,
  ) { };
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  getValues = "";
  GetUserId = "";
  themeColor: any = sessionStorage.getItem('themeColor');
  ToggleStar = true
  HandleToggleStar: any = [];
  FavourateDatas: any;
  public Gooback: any = '';
  checkGoBack: any = 'false';
  public faPlane = faPaperPlane;
  faarrowleft = faArrowLeft;
  chatSend = '';
  favourates = faStar;
  optionToggle:any = true; 
  messages: any = [];
  currentUser = sessionStorage.getItem('userId');
  receiverId = sessionStorage.getItem('FavUserId');
  username: any = 'hellofaker'
  message: any = '';
  ngOnInit(): void {
    this.getName();
    this.getShowProfile();
    this.ToggleChangeUserName();
    this.ToggleShowProfile();
    this.GetFavourate();
    this.getMess()
    this.handleThemeColor();
    this.realtimeDelete();

    this.SockectService.on('friendListUpdate', (data: any) => {
      // console.log('Friend list updated:', data);
     this.clickProfile();

    });

  }
  ngAfterViewChecked(): void {
    // this.scrollToBottom();
  }
  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Could not scroll to bottom:', err);
    }
  };

  handleThemeColor() {
    this.themechange.currentThemeChange.subscribe((res) => {
      this.themeColor = sessionStorage.getItem('themeColor')
    })
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
      const sender_id = sessionStorage.getItem('userId');
      const receiver_id = sessionStorage.getItem('FavUserId')
      this.chatService.sendmessage(sender_id, this.message, receiver_id).subscribe(
        (response: any) => {
          console.log('Message sent successfully:', response);
          this.message = '';
          this.scrollToBottom();
          // Clear the input field after sending the message
        },
        (error: any) => {
          console.error('Error sending message:', error);
        }
      );
    }
  }
  getMess() {
    // this.dataSharing.currentUsername.subscribe((res) => {
    this.chatService.messages$.subscribe((mes) => {
      this.messages = mes;
      this.scrollToBottom();
      console.log(mes);
    });
    // this.chatService.newChat$.subscribe((chat)=>{
    //   sessionStorage.setItem('newChat','true')
    // });
    const sender_id = sessionStorage.getItem('userId');
    const receiver_id = sessionStorage.getItem('FavUserId')
    this.chatService.getMessages(sender_id, receiver_id).subscribe();
    // })
  };

  removeFreindLIst() {
    const ID = sessionStorage.getItem('userId')
    const param: any = sessionStorage.getItem('FavUserId')
    // console.log(ID);
    this.PostService.AddToFriendList(param, ID).subscribe(
      (data: any) => {
        alert(data.mes);
        sessionStorage.setItem('username', 'false');
        this.delmessage(ID, param);
      }
    )
  }
  delmessage(sender_id: any, receiver_id: any) {
    this.chatService.delmessage(sender_id, receiver_id).subscribe(res => {
      console.log('Friend and chat history deleted successfully');
      // Update your UI accordingly;
      this.chatService.deletedConversationSubject.next({ senderid: sender_id, receiverid: receiver_id });
    },
      error => {
        console.log(error);
      }
    )
  };

  clickProfile() {
    this.checkGoBack = 'false'
  }
  realtimeDelete() {
    this.chatService.currentDelMessage$.subscribe((data) => {
      if (data) {
        const { senderid, receiverid } = data;
        const userId = sessionStorage.getItem('userId');
        const favUserId = sessionStorage.getItem('FavUserId');

        if ((senderid == userId && receiverid == favUserId) || (senderid == favUserId && receiverid == userId)) {
          this.messages = []
        }

      }
    })
  };
 
  toggleOption(){
    if(this.optionToggle == true){
      this.optionToggle = false;
    }
    else{
      this.optionToggle = true;

    }
  }

  

}
