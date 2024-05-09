import { Component } from '@angular/core';
import { ChatComponent } from '../chat.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(private UP:ChatComponent ){};
  getValues = ""
  getName(){
    console.log(this.UP.username);
  }

}
