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
    path:'',component:HomeComponent,
    canActivate:[AuthGuardService] 
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
    canActivate:[AuthGuardService]
  },
  {
    path:"cart",
    component:ProductCartComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: "productDetails",
    component: ProductDetailsComponent,
  },
  {
    path:"orders",
    component: OrdersComponent,
    canActivate:[AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
