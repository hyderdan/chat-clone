import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule,  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public defaultPhoneNo:number = 9207403126;
  public defaultPassword = "1234";

  constructor(private route: Router, private FB: FormBuilder) { }


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

  OnSubmit(){
    const isValid = this.createLoginForm.valid;
    if(isValid){
      const providedPhoneNo:number =  this.createLoginForm.controls['phoneNumber'].value;
      const providedPassword:any = this.createLoginForm.controls['password'].value;
      console.log(providedPhoneNo, providedPassword);
    }else{
      alert('inavalid phone No or passwors')
    }
  }

  navigate(params: string) {
    this.route.navigate([params])
  }
}
