import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faComment, faPeopleGroup, faBars, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { DataSharingService } from '../services/data-sharing.service';
import { ChatComponent } from '../chat/chat.component';
import { UsersComponent } from '../chat/users/users.component';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule,ChatComponent,UsersComponent,SearchComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  toggleSearch:boolean = true;
  public faUser = faUser
  public chat = faComment;
  public channel = faPeopleGroup;
  public profile = faBars;
  
  constructor(private DS: DataSharingService) { }

  handleFilter() {
    // const filteredArray = this.datas.filter((data) => {
    //   return data.filter == "personal"
    // });
    // console.log(filteredArray);
    this.DS.handletoggleChat(true);
    this.toggleSearch = true;

  };

  allChat() {
    this.DS.handletoggleChat(true);
    this.toggleSearch = true;
  }
  profileShow(){
    this.DS.handletoggleChat(false);
    this.toggleSearch = true;
    console.log(false)
  }
  search(){
    this.toggleSearch = false;
  }

}
