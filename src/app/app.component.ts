import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './chat/users/users.component';
import { DataSharingService } from './services/data-sharing.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, ChatComponent, UsersComponent, HttpClientModule
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
,
   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: any;
  constructor(private DS: DataSharingService) { };
  ngOnInit(): void {
    this.getValue();
  }
  getValue() {
    this.DS.currenUserSm.subscribe(userSm => {
      this.title = userSm;
      console.log(this.title);
    })
  }
}
