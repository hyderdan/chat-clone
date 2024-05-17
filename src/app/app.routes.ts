import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './chat/users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './sign-up/login/login.component';
import { RouteGuardService } from './services/route-guard.service';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [loginGuard] },
    { path: 'chat', component: ChatComponent, canActivate: [loginGuard] },
    { path: 'chat/user', component: UsersComponent, canActivate: [loginGuard] },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }

];
