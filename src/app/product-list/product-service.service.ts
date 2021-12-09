import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  fetchProducts():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/").pipe(tap((_:any)=>console.log(_)));
  }
}
