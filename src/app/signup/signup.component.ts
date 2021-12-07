import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registrationForm: FormGroup
  constructor(private fb: FormBuilder) { }

  get userName(){
    return this.registrationForm.get('userName');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get phone(){
    return this.registrationForm.get('phone');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword');
  }

  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      userName:['',Validators.required],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone:['',[Validators.required,Validators.pattern("^[0-9]{10}")]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['']
    },{validators:PasswordValidator})

  }

}
