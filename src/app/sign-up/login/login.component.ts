import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteGuardService } from '../../services/route-guard.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public defaultPhoneNo: number = 9207403126;
  public defaultPassword = "hyder";

  constructor(private route: Router, private FB: FormBuilder, private RG:RouteGuardService) { }


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
      const checkPhoneNo = providedPhoneNo == this.defaultPhoneNo;
      const checkPassword = providedPassword == this.defaultPassword;
      if (checkPhoneNo && checkPassword) {
        this.RG.login();
        this.route.navigate(['home']);
      } else {
        alert('this account is not exist');
      }
    }
  }

  navigate(params: string) {
    this.route.navigate([params])
  }
}
