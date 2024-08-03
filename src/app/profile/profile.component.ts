import { Component, OnInit } from '@angular/core';
import { GetdatasService } from '../services/getdatas.service';
import { RouteGuardService } from '../services/route-guard.service';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { DataSharingService } from '../services/data-sharing.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  userProfile: any
   xmark = faXmark;
   hadleProfileOptions:any = true;
   themeColor = sessionStorage.getItem('themeColor');
  constructor(private GetDatas: GetdatasService, private datasharing:DataSharingService,private checkLogout: RouteGuardService, private route: Router) { }

  ngOnInit(): void {
    this.getUserProfile();
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
  logOut() {
    this.checkLogout.logout();
    // sessionStorage.removeItem('userToken');
    // sessionStorage.removeItem('userId');
    // sessionStorage.removeItem('isAuthenticated')
    this.route.navigate(['login']);
  };

  handleClose(){
    // sessionStorage.setItem('show-profile','closeProfile');
    this.datasharing.closeprofile('closeProfile');
  };
  handleProfileoption(){
    if(this.hadleProfileOptions == false){
      this.hadleProfileOptions = true
    }else{
      this.hadleProfileOptions = false
    }
  };
  handleThemeColor(){
    sessionStorage.setItem('themeColor', 'white')
  }
}
