import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.css']
})
export class RecommendedProductsComponent implements OnInit {

    recommendedproducts:any[]=[];
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
      this.searchService.getRecommendtions().subscribe(
        (data)=>{
            this.recommendedproducts=data;
        },
      (err)=>{
        console.log("error in fetching recommended products");
      }
      )
  }
  currentProduct!:any;
  setCartItem(value:any){
    console.log(value)
    localStorage.setItem("currentProduct",JSON.stringify(value));
}


}
