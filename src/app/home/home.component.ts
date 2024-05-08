import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faComment, faPeopleGroup, faBars } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public faUser = faUser
  public chat = faComment;
  public channel = faPeopleGroup;
  public profile = faBars;

}
