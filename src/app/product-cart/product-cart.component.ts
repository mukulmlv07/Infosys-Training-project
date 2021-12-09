import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  constructor() { }
  totalAmount:number=30000;
  red:string="red";
  maxOrderLimit:number=4;
  isProductCartVisible:boolean=false;
  isToastVisible:boolean = false;

  cart_items:any[] = [
    {displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000},
    {displayName:"Nokia 150", category:"Mobile", sellernName:"XYXz", price:3000, deliveryCharge:50, 
    quantity: 1, total:5000, cartOfferPrice:3000},
    {displayName:"Chocolate Box", category:"Food", sellernName:"Cadbury", price:500, deliveryCharge:50, 
    quantity: 1, total:5000, cartOfferPrice:3000},
    {displayName:"Lenovo 350", category:"Laptop", sellernName:"Lenovo distributors", price:65000, deliveryCharge:50, 
    quantity: 1, total:5000, cartOfferPrice:3000},
    {displayName:"HP Probook", category:"Laptop", sellernName:"hp central", price:95000, deliveryCharge:50, 
    quantity: 1, total:5000, cartOfferPrice:3000}
  ]

  ngOnInit(): void {
    this.isProductCartVisible = this.cart_items.length > 0 ;
    // this.isProductCartVisible = false;
  }

  getItemPrice(ind:number):number{
    return this.cart_items[ind].price * this.cart_items[ind].quantity;
  }

  decreaseQuantity(ind:number):void{
    if(this.cart_items[ind].quantity == 1){
        //do something
    }else{
      this.cart_items[ind].quantity--;
    }    
  }

  increaseQuantity(ind:number):void{
    if(this.cart_items[ind].quantity == this.maxOrderLimit){
      //do something
      this.isToastVisible = true;
    }else{
      this.cart_items[ind].quantity++;
    }    
  }

  getTotalAmount():number{
    let ans:number=0;
    for(let i=0;i<this.cart_items.length;i++){
      ans+=this.cart_items[i].price * this.cart_items[i].quantity;
    }
    return ans + this.getTotalDeliveryCharges();
  }

  getTotalDeliveryCharges():number{
    let ans:number=0;
    for(let i=0;i<this.cart_items.length;i++){
      if(this.cart_items[i].price * this.cart_items[i].quantity < 1000){
        ans += this.cart_items[i].deliveryCharge;
      }
    }
    return ans;
  }

  removeItem(ind:number):void{
    this.cart_items.splice(ind,1);
    this.isProductCartVisible = this.cart_items.length > 0 ;
  }

}
