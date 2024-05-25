import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { PostdatasService } from '../services/postdatas.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

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
  searachInput: string = ""
  users: any[] = [];
  friend: any[] = [];
  ngOnInit(): void {
  }
  constructor(private postdatas: PostdatasService) { }

  handleSearch() {
    this.toggleloader = false
    setTimeout(() => {
      this.toggleloader = true
      this.postdatas.SearchUser(this.searachInput).subscribe(
        res => {
          console.log(res.data);
          this.users = res.data;
        }
      )
    }, 500);
  }

  AddToFreindLIst(param: string) {
    const ID = sessionStorage.getItem('userId')
    console.log(ID);
    this.postdatas.AddToFriendList(param, ID).subscribe(
      res => {
        console.log(res);
      }
    )

  }
  friendLists() {
    const userid = sessionStorage.getItem('userId')
    this.postdatas.friendList(userid).subscribe(
      res => {
       console.log(res)
      }
    )
  }

}
