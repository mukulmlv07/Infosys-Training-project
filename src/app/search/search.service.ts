import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  getSearchData(searchProduct:any):Observable<any[]>{
        return this.http.get<any[]>(`./assets/searchdata.json`).pipe(
          tap((data:any)=>console.log("search success",data)),
          catchError(this.handleError)
        )
  }
  /*
  get's today deals
  */
  getTodayDeals():Observable<any[]>{
    return this.http.get<any[]>(`./assets/searchdata.json`).pipe(
      tap((data:any)=>console.log("search success",data)),
      catchError(this.handleError)
    )
}

  /*
  get recommendations for a user
  */
  getRecommendtions():Observable<any[]>{
    return this.http.get("http://localhost:3000/").pipe(tap((_:any)=>console.log(_)))
    // return this.http.get<any[]>('./assets/searchdata.json').pipe(
    //   tap((data:any)=>console.log("recommended products",data)),
    //   catchError(this.handleError)
    // )
    }
    /*
    getProduct Details of a selected product
    */

    getProductDetails():Observable<any[]>{
      return this.http.get<any[]>(
        "./assets/productdetails.json"
      )
    }
    /*
    getProduct Comparisons
    */
   getProductComparisons():Observable<any[]>{
    return this.http.get<any[]>(
      "./assets/\productcomparisondata.json"
    )
   }

   /*
   add items to cart
   */
   addItemIntoCart(data:any):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
     return this.http.post<any>("url",data,{headers:options}).pipe(
      catchError(this.handleError)
     );
   }
   /*
   add items to wishlist
   */
   addItemIntoWishList(data:any):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
     return this.http.post<any>("url",data,{headers:options}).pipe(
       catchError(this.handleError)
     );
   }

     /*
  get all laptops deals
  */
  getLaptopDeals():Observable<any[]>{
    return this.http.get<any[]>(`./assets/laptops.json`).pipe(
      tap((data:any)=>console.log("search success",data)),
      catchError(this.handleError)
    )
}
     /*
  get all mobiles deals
  */
  getMobileDeals():Observable<any[]>{
    return this.http.get<any[]>(`./assets/mobiles.json`).pipe(
      tap((data:any)=>console.log("search success",data)),
      catchError(this.handleError)
    )
}
private  handleError(err:HttpErrorResponse):Observable<any>{
    let errMsg="error in search box";
    return throwError(errMsg);
  }
}
