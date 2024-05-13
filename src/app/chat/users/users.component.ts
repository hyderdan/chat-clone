import { Component, OnInit } from '@angular/core';
import { ChatComponent } from '../chat.component';
import { DataSharingService } from '../../services/data-sharing.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ChatComponent, FontAwesomeModule, CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(private dataSharing: DataSharingService, private router: Router,) { };
  getValues = "";
  public Gooback: boolean = true;
  public faPlane = faPaperPlane;
  faarrowleft = faArrowLeft;
  chatSend = '';

  ngOnInit(): void {
    this.getName();
    this.getShowProfile();
  }
  goBAck(params: string) {
    const back: boolean = false;
    this.dataSharing.handleUsersm(back);
    this.router.navigate([params]);

  }
  getName() {
    this.dataSharing.currentUsername.subscribe(username => {
      this.getValues = username;
    })
  }
  getShowProfile() {
    this.dataSharing.currentShowProfile.subscribe(showProfile => {
      this.Gooback = showProfile;
      console.log(showProfile);
    })
  }

}
