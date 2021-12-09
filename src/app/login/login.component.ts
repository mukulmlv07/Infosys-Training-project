import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServicesService } from '../main-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!:string;
  password!:string;
  errorMsg!:string
  success:boolean=false;

  constructor(private loginService:MainServicesService,private router: Router) { }

  ngOnInit(): void {
  }

  validatePassword():void{
    //TODO: authenticate email and password from backend
    const userId = this.email;
    const password = this.password;
    this.loginService
      .isUserAuthenticated({userId, password})
      .subscribe(success=>{console.log(success)
        if(success.message=='successfully logged in'){
          this.router.navigate(['']);
        }else{
          this.errorMsg = 'Invalid Credentials. Try again.';
        }
      })
  }
}
