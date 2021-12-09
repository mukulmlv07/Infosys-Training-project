import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from "@angular/router";
import { MainServicesService } from './main-services.service';
@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  constructor(private loginService: MainServicesService, private router: Router) { }
  canActivate(): boolean {
      if (this.loginService.isUserLoggedIn()) {
        console.log('yes')
          return true;
      }
      this.router.navigate(['/login']);
      console.log('no')
      return false;
  }
}