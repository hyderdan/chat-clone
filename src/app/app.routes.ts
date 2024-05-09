import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './chat/users/users.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'chat/user', component: UsersComponent },

];
