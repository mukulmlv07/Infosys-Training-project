import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  val:any=JSON.parse(localStorage.getItem("currentProduct")||'{}');
  constructor(private searchService:SearchService,private router:Router) { }
  productThere!:boolean;
  product!:ProductType;
  quantity:number=1;
  giveRating:number=1;
  isItemsThereInCart!:boolean;
  isItemsThereInWishList!:boolean
  reviewEntered!:string
  ngOnInit(): void {
    this.searchService.getProductDetails().subscribe(
      (data:any)=>{
        this.product=data;
        this.productThere=true;
        console.log(this.product);
      },
      (err:any)=>{
        console.log("error fetching details");
      }
    );
    // const val:any = 
     console.log("local item",localStorage.getItem("currentProduct"));
  }
  changeQuantity(value:string):void{
    this.quantity=parseInt(value);
    console.log(this.quantity);
  }
  changeRating(value:string):void{
    this.giveRating=parseInt(value);
    console.log(this.giveRating);
  }
  addToCart(){
    this.isItemsThereInCart=true;
    let data={};
    // this.searchService.addItemIntoCart(data).subscribe(
    //   (result)=>{
    //     console.log("items added to cart");
    //   },
    //   (err)=>{
    //     console.log("error adding items into cart...");
    //   }
    // )
  }
  goToCart(){
    this.router.navigate(["./cart"])

  }
  addToWishList(){
    this.isItemsThereInWishList=true;
    let data={};
    // this.searchService.addItemIntoCart(data).subscribe(
    //   (result)=>{
    //     console.log("items added to cart");
    //   },
    //   (err)=>{
    //     console.log("error adding items into cart...");
    //   }
    // )
  }
  goToWishList(){
    this.router.navigate(["./wishlist"])
  }
  submitReview(){
      console.log(this.reviewEntered)
  }

}

interface ProductType{
  displayName:string,
  shortDesc:string,
  desc:string,
  category:string,
  price:number,
  discount:number,
  deliveryCharge:number,
  offerPrice:number,
  seller:string,
  sellerCount:number,
  avgRating:number,
  reviews:any[]
}