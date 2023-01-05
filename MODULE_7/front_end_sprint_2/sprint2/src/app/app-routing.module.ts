import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {DetailComponent} from "./component/detail/detail.component";
import {CartComponent} from "./component/cart/cart.component";
import {HeaderComponent} from "./component/header/header.component";
import {FooterComponent} from "./component/footer/footer.component";
import {LoginComponent} from "./component/login/login.component";


const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'home/detail/:id',component:DetailComponent
  },
  {
    path:'home/cart',component:CartComponent
  },
  {
    path:'home/login',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }