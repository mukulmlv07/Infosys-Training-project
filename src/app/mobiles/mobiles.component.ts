import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  allLaptops:any[] = [];
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
        this.searchService.getMobileDeals().subscribe(
        (data:any)=>{
          this.allLaptops= data;
        },
        (err:any)=>{
            console.log("error fetching the today deals");
        }
        )
  }
  currentProduct!:any;
  setCartItem(value:any){
    // console.log("Hello",value)
    localStorage.setItem("currentProduct",JSON.stringify(value));
}
}
