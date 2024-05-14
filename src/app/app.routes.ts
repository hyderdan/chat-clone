import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './chat/users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './sign-up/login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'chat/user', component: UsersComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: '', component: LoginComponent }

];
