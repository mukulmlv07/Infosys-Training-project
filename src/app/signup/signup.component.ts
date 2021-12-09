import { Component, OnInit } from '@angular/core';
import { MainServicesService } from '../main-services.service';
import { user } from '../user';

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
  constructor(private signupService: MainServicesService) { }
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
     if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)==false){
      this.errorMsg="Email should be in proper formate";
       return;
     }
     if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/.test(this.password)==false){
      this.errorMsg="Password should contain atleast one uppercase and a lowercase character, a number and a special character";
      return;
     }
     if(this.password!==this.confirmPassword){
       this.errorMsg="Password and Confirm Password are not matching";
       return;
     }
     console.log("somthing",this.email)
    //  this.signupService.register()
    const userModal=new user(this.name,this.email,this.password,this.accountType)
    // console.log(userModal)
    this.signupService.register(userModal).subscribe(success=>{
      if(success.status=='error'){
        this.success=false;
        this.errorMsg=success.message
      }
      else{
        this.errorMsg=''
        this.success=true
      }
    },error=>{
      
    })
  }
}
