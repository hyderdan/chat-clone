import { Component, OnInit } from '@angular/core';
import { GetdatasService } from '../services/getdatas.service';
import { RouteGuardService } from '../services/route-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  userProfile: any

  constructor(private GetDatas: GetdatasService, private checkLogout: RouteGuardService, private route: Router) { }

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
  }
}
