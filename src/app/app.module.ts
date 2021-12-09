import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { TodaydealsComponent } from './todaydeals/todaydeals.component';
import { HomeComponent } from './home/home.component';
import { RecommendedProductsComponent } from './recommended-products/recommended-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PricecomparisonComponent } from './pricecomparison/pricecomparison.component';
import { FooterComponent } from './footer/footer.component';
import { OrdersComponent } from './orders/orders.component';
import { RepeatDirective } from './orders/repeat.directive';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobilesComponent } from './mobiles/mobiles.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    WishlistComponent,
    TodaydealsComponent,
    HomeComponent,
    RecommendedProductsComponent,
    ProductCartComponent,
    WishlistComponent,
    ProductDetailsComponent,
    PricecomparisonComponent,
    FooterComponent,
    OrdersComponent,
    RepeatDirective,
    LaptopsComponent,
    MobilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
