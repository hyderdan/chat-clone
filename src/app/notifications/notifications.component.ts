import { Component, OnInit } from '@angular/core';
import { SockectservicesService } from '../services/sockectservices.service';
import { DataSharingService } from '../services/data-sharing.service';
import { CommonModule } from '@angular/common';
import { PostdatasService } from '../services/postdatas.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit {

  username: string[] = []
  themeColor:any = sessionStorage.getItem('themeColor')

  constructor(private Sockectservice: SockectservicesService, private dataSharing: DataSharingService, private postdatas: PostdatasService) { }

  ngOnInit(): void {
    this.friendLists()
  }
  friendLists() {
    const userid = sessionStorage.getItem('userId')
    this.postdatas.friendList(userid).subscribe(
      res => {
        // console.log(this.CompareID)
        this.username = res.userName
      }
    )
  }


}
