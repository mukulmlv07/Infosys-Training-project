import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name!:string;
  password!:string;
  confirmPassword!:string;
  email!:string;
  accountType:string = "Buyer";
  errorMsg!:string;
  success:boolean=false;
  constructor() { }
  ngOnInit():void {
  }

  register():void{
    if(this.name===undefined || this.password===undefined || this.confirmPassword===undefined
     || this.email===undefined){
       this.errorMsg="All the fields are mandatory";
       return;
     }
     if(/^[a-zA-Z]+$/.test(this.name)==false){
      this.errorMsg="Name contains invalid character";
       return;
     }
     if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(this.password)==false){
      this.errorMsg="Password should contain atleast one uppercase and a lowercase character, a number and a special character";
      return;
     }
     if(this.password!==this.confirmPassword){
       this.errorMsg="Password and Confirm Password are not matching";
       return;
     }
     this.success=true;
     this.errorMsg="";
  }
}
