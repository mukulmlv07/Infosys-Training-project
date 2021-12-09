import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-todaydeals',
  templateUrl: './todaydeals.component.html',
  styleUrls: ['./todaydeals.component.css']
})
export class TodaydealsComponent implements OnInit {

    todalDealsData:any[] = [];
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
        this.searchService.getTodayDeals().subscribe(
        (data:any)=>{
          this.todalDealsData= data;
        },
        (err:any)=>{
            console.log("error fetching the today deals");
        }
        )
  }
  currentProduct!:any;
  setCartItem(value:any){
    console.log(value)
    localStorage.setItem("currentProduct",JSON.stringify(value));
}

}
