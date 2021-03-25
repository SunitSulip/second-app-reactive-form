import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { passwordValidator } from './app.validator';
import { AbstractControl } from "@angular/forms";
// import {FromGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private fb: FormBuilder) {
    this.captchaReload();
  }
  public captchaA: number;
  public captchaB: number;
  public add:number;
  
  employeeForm = this.fb.group({
    firstName :['',[Validators.required,Validators.minLength(3)]],
    middleName :[''],
    lastName : ['',[Validators.required,Validators.minLength(3)]],
    gender: ['',Validators.required],
    address : this.fb.group({
      permanentAddress: ['',Validators.required],
      temporaryAddress: [''],
      state: ['',Validators.required],
      country:['',Validators.required],
    }),
    mobile:['',[Validators.required,Validators.pattern('^\\d{10}$')]],
    email:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required],
    captcha:['',[Validators.required]]
  },{validator : passwordValidator});



  captchaReload(){
    this.captchaA=Math.floor(Math.random() * Math.floor(9))
   this.captchaB=Math.floor(Math.random() * Math.floor(9))
   this.add=this.captchaA+this.captchaB
  }
  submitted = false
  onSubmit(){
    this.submitted =true;
  }

  
}
