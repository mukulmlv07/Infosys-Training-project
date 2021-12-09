import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  allLaptops:any[] = [];
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
        this.searchService.getLaptopDeals().subscribe(
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
    console.log(value)
    localStorage.setItem("currentProduct",JSON.stringify(value));
}

}
