import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faComment, faPeopleGroup, faBars, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { DataSharingService } from '../services/data-sharing.service';
import { ChatComponent } from '../chat/chat.component';
import { UsersComponent } from '../chat/users/users.component';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { GetdatasService } from '../services/getdatas.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, ChatComponent, UsersComponent, SearchComponent, CommonModule],
  providers: [GetdatasService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  toggleSearch: boolean = true;
  public faUser = faUser
  public chat = faComment;
  public channel = faPeopleGroup;
  public profile = faBars;

  constructor(private DS: DataSharingService, private CallFunction: GetdatasService , ) { }

  handleFilter() {
    this.DS.handletoggleChat(true);
    this.toggleSearch = true;
    this.ToggleFilter()
  };
  ToggleFilter(){
    sessionStorage.setItem('isFavurate','true');
    this.DS.HandleTogglefav('true')
  }

  allChat() {
    this.DS.handletoggleChat(true);
    this.toggleSearch = true;
    this.togleAllchat()
  }
  togleAllchat(){
    sessionStorage.setItem('isFavurate', 'false');
    this.DS.HandleTogglefav('false')
  }
  profileShow() {
    this.DS.handletoggleChat(false);
    this.toggleSearch = true;
    console.log(false)
  }
  search() {
    this.toggleSearch = false;
  }

}
