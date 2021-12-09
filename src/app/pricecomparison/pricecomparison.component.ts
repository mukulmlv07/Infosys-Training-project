import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-pricecomparison',
  templateUrl: './pricecomparison.component.html',
  styleUrls: ['./pricecomparison.component.css']
})
export class PricecomparisonComponent implements OnInit {
  
  productComparisonData!:any[];
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
    this.searchService.getProductComparisons().subscribe(
        (data)=>{
          this.productComparisonData = data;
        },
        (err)=>{
          console.log("error product comparison data")
        }
    )
  }

}
