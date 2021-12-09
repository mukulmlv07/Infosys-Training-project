import { Component, OnInit } from '@angular/core';
import {MainServicesService} from '../main-services.service';
import {demoData} from './dummydata';
import { WishlistService } from './wishlist.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  demoData!:any[];
  constructor(private rest:MainServicesService,private dataService:WishlistService) { }
  uid=this.rest.requestId();
  ngOnInit(): void {
    this.demoData=demoData;
    // this.demoData=this.dataService.getWishlist(uid).service((data)=>{
    //   this.demoData=data
    // })
  }
  addtocart(productname:string){
    const userId=this.rest.requestId();
    //make a call to backend adding item to cart
    // const data=this.rest.post("link")

    this.removeitem(productname)
  }
  removeitem(productname:string){
    const userId=this.rest.requestId();
  }
}
