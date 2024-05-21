import { Component } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostdatasService } from '../services/postdatas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [PostdatasService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  // passwordRegex = ;

  constructor(private route: Router, private FB: FormBuilder, private PostDatas: PostdatasService) { }

  navigateToLogin(params: string) {
    this.route.navigate([params]);

  }
  passwordValidation(params: AbstractControl) {
    if (!params.value || !/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(params.value)) {
      return { 'invalidPassword': true };
    }
    return null
  }

  PhoneValidatiion(params: AbstractControl) {
    if (!params.value || !/^\d{10}$/.test(params.value)) {
      return { 'invalidPhoneNumber': true };
    }
    return null
  };
  createFormGroup: FormGroup = this.FB.group({
    phoneNo: ['', [Validators.required, this.PhoneValidatiion]],
    username: ['', Validators.required],
    password: ['', [Validators.required, this.passwordValidation]],
    confirmPass: ['', Validators.required]
  });

  signUp() {
    const isValid = this.createFormGroup.valid;
    if (isValid) {
      const ProvidedUserName = this.createFormGroup.controls['username'].value;
      const ProvidedPhoneNo = this.createFormGroup.controls['phoneNo'].value;
      const ProvidedPassword = this.createFormGroup.controls['password'].value;
      const ProvidedConfirmPassword = this.createFormGroup.controls['confirmPass'].value;
      this.PostDatas.postDatas(ProvidedUserName, ProvidedPhoneNo, ProvidedPassword, ProvidedConfirmPassword).subscribe(
        res => {

          alert(res.message)
          this.createFormGroup.reset();
          if(res.message == 'Account created successfully'){
            this.route.navigate(['login']);
          }
        }
      )

    } else {
      console.log('error')
    }
  }
}
