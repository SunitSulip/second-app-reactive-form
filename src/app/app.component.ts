import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
// import {FromGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private fb: FormBuilder) {}

  employeeForm = this.fb.group({
    firstName :[''],
    middleName :[''],
    lastName : [''],
    gender: [''],
    address : this.fb.group({
      permanentAddress: [''],
      temporaryAddress: [''],
      state: [''],
      country:[''],
    }),
    mobile:[''],
    email:[''],
    password: [''],
    confirmPassword: [''],
    captchaA: [''],
    captchaB :[''],
  })

  
}
