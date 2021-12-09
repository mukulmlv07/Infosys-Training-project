import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductCartComponent } from './product-cart/product-cart.component';


import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  { 
    path:'search/:productname',component:SearchComponent
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "wishlist",
    component: WishlistComponent,
  },
  {
    path:"cart",
    component:ProductCartComponent,
  },
  {
    path: "productDetails",
    component: ProductDetailsComponent,
  },
  {
    path:"orders",
    component: OrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
