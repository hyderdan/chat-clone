import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faComment, faPeopleGroup, faBars } from '@fortawesome/free-solid-svg-icons';
import { DataSharingService } from '../services/data-sharing.service';
import { ChatComponent } from '../chat/chat.component';
import { UsersComponent } from '../chat/users/users.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule,ChatComponent,UsersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public faUser = faUser
  public chat = faComment;
  public channel = faPeopleGroup;
  public profile = faBars;
  public datas = [
    {
      "name": 'hyder',
      "filter": "personal"
    },
    {
      "name": 'rahul',
      "filter": "personal"
    },
    {
      "name": 'manu',

    },
    {
      "name": 'danish',
      "filter": "personal"
    },
    { "name": 'asif' }
  ];

  constructor(private DS: DataSharingService) { }

  handleFilter() {
    const filteredArray = this.datas.filter((data) => {
      return data.filter == "personal"
    });
    console.log(filteredArray);
    this.DS.handleUserProfile(filteredArray);
  };

  allChat() {
    this.DS.handleUserProfile(this.datas);
  }

}
