import { Component,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search/search.service';
import { MainServicesService } from './main-services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  searchText!:string;
  show!:boolean;
  userId!:string;
  constructor(private router:Router,private searchService:SearchService,private loginService: MainServicesService){}
  ngDoCheck(): void {
    this.userId=this.loginService.requestId();
  }
  
  /*
  search bar onchange text util
*/
  searchTextChange():void{
    //    this.searchService.getSearchInputFromNav(this.searchText);
  }

  /*
  -search button functionality
  -takes you to /search/productspage
  */

  searchHandler():void{
    console.log("hello search router")
    if(this.searchText.length>0)
      this.router.navigate([`/search/${this.searchText}`]);
  }

  removeuserId():void{
    this.loginService.removeId();
    this.userId='';
    this.router.navigate(['']);
  }


}
