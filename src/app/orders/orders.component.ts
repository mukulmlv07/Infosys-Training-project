import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }
  orders!:any[];
  closedOrders!:any[];
  openOrders!:any[];
  cancelledOrders!:any[];
  returnOrders!:any[];

  dummydata:any[]=[
    {orderID:123,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"open",btnCancel:false,btnReturn:false},
    {orderID:124,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"closed",btnCancel:false,btnReturn:false},
    {orderID:125,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"cancelled",btnCancel:true,btnReturn:false},
    {orderID:126,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"cancelled",btnCancel:true,btnReturn:false},
    {orderID:127,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"returned",btnCancel:false,btnReturn:true},
    {orderID:128,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"open",btnCancel:false,btnReturn:false},
    {orderID:129,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"open",btnCancel:false,btnReturn:false},
    {orderID:130,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"open",btnCancel:false,btnReturn:false},
    {orderID:131,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"open",btnCancel:false,btnReturn:false},
    {orderID:132,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"cancelled",btnCancel:true,btnReturn:false},
    {orderID:133,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"cancelled",btnCancel:true,btnReturn:false},
    {orderID:134,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"closed",btnCancel:false,btnReturn:false},
    {orderID:135,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"closed",btnCancel:false,btnReturn:false},
    {orderID:136,cardType:'credit',displayName:"Lays", category:"Food", sellernName:"XYXz", price:40, deliveryCharge:70, 
    quantity: 1, total:5000, cartOfferPrice:3000,orderDate:"27/02/2000",orderStatus:"returned",btnCancel:false,btnReturn:true},
  ]
  ngOnInit(): void {
    this.openOrders=this.dummydata.filter((data)=>data.orderStatus==="open" && data.btnCancel===false &&data.btnReturn===false);
    this.closedOrders=this.dummydata.filter((data)=>data.orderStatus==="closed" && data.btnCancel===false &&data.btnReturn===false);
    this.cancelledOrders=this.dummydata.filter((data)=>data.btnCancel===true);
    this.returnOrders=this.dummydata.filter((data)=>data.btnReturn===true);
  }
  

}
