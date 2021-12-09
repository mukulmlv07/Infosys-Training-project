import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
// const USERS = [{ userId: '1ab', password: 'user1', username: 'user1' }, { userId: '2ab', username: 'user2', password: 'user2' }];
// const usersObservable = of(USERS);


@Injectable({
  providedIn: 'root'
})
export class MainServicesService {

  constructor(private http: HttpClient) { }
  private userId: string = '';
  private isloggedIn = false;

  register(userData): Observable<any> {
    const url = "http://localhost:3000/signup"
    return this.http.post<any>(url, userData);
  }

  // getAllUsers(): Observable<any[]> {
  //   return usersObservable;
  // }

  isUserAuthenticated(data: any): Observable<any> {
    return this.http.post("http://localhost:3000/login", data).pipe(tap((_:any)=>{console.log(_.message);
    if(_.message=='successfully logged in'){
      this.isloggedIn=true
      this.userId=data.userId

    }else{
      this.isloggedIn = false;
      this.userId='';
    }  
  }),catchError(this.handleError))
  }

  // return this.getAllUsers().pipe(
  //   map(users => {
  //     const Authenticateduser = users.find(user => (user.username === username) && (user.password === password));
  //     if (Authenticateduser) {
  //       this.isloggedIn = true;
  //       this.userId=Authenticateduser.userId;
  //       console.log(this.userId)
  //     } else {
  //       this.isloggedIn = false;
  //     }
  //     return this.isloggedIn;
  //   })
  // );

isUserLoggedIn(): boolean {
  if (this.userId != '') {
    return true
  } else {
    return false
  }
}
requestId(): string {
  return this.userId;
}
removeId(): void {
  this.userId = '';
}
post(link: string, body: any) {
  return this.http.post(link, body).toPromise();
}
get(link: string) {
  return this.http.get(link).toPromise();
}
handleError(err:HttpErrorResponse){
  console.log(err)
  return throwError(err)
}
}

