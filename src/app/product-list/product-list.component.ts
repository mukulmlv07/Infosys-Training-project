import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private prodService:ProductServiceService) { 
    
  }

  ngOnInit() {
    this.fetch()
  }

  fetch(){
    this.prodService.fetchProducts().subscribe(success=>{console.log(success)})
  }
  
  

}
