import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteGuardService } from '../../services/route-guard.service';
import { PostdatasService } from '../../services/postdatas.service';
import { GetdatasService } from '../../services/getdatas.service';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [PostdatasService, GetdatasService,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public defaultPhoneNo: number = 9207403126;
  public defaultPassword = "hyder";
  userProfile = [];
  constructor(private route: Router, private FB: FormBuilder, private RG: RouteGuardService, private LoginService: PostdatasService, private GetDatas: GetdatasService, private DS: DataSharingService) { }


  phoneNumberValidation(params: AbstractControl) {
    if (!params.value || !/^\d{10}$/.test(params.value)) {
      return { 'invalidPhoneNumber': true };
    }
    return null; // Return null if validation passes
  }
  createLoginForm: FormGroup = this.FB.group({
    phoneNumber: ['', [Validators.required, this.phoneNumberValidation]],
    password: ['', Validators.required]
  })

  OnSubmit() {
    const isValid = this.createLoginForm.valid;
    if (isValid) {
      const providedPhoneNo: number = this.createLoginForm.controls['phoneNumber'].value;
      const providedPassword: string = this.createLoginForm.controls['password'].value;
      console.log(providedPassword);
      this.LoginService.loginUser(providedPhoneNo, providedPassword).subscribe(
        res => {
          console.log(res);
          alert(res.message);

          if (res.params === true) {
            sessionStorage.setItem('isAuthenticated', res.params.toString())
            sessionStorage.setItem('userToken', res.usertoken);
            sessionStorage.setItem('userId', res.user_id)
            this.RG.login(res.params);

            this.createLoginForm.reset();
            this.route.navigate(['home']);
          }
        },
        err => {
          console.error('Login failed', err);
          alert('Login failed. Please try again.');
        }
      );
    } else {
      alert('Please fill out the form correctly.');
    }
  }


  navigate(params: string) {
    this.route.navigate([params])
  }

 
}
