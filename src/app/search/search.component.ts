import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService:SearchService,private activatedRoute: ActivatedRoute) { }
  
  searchData:any[] = [];
  searchError!:any;
  searchTextInput!:string;


  onChangeSearchText(searchText:string){
    console.log(searchText);
    // this.searchTextInput=searchText;
    if(searchText.length>0)
    this.searchService.getSearchData(searchText).subscribe(
        (data:any)=>{
          this.searchData=data;
        },
        (err:any)=>{
          this.searchError="error in search request"
          console.log("error in seach reuest method");
        }
        );
}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.searchTextInput = paramsId.productname;
      // console.log(paramsId.productname,this.searchTextInput);
  });
    this.onChangeSearchText(this.searchTextInput);
  }
  currentProduct!:any;
  setCartItem(value:any){
    console.log(value)
    localStorage.setItem("currentProduct",JSON.stringify(value));
}


}
