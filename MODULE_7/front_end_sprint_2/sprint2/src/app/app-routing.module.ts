import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {DetailComponent} from "./component/detail/detail.component";
import {CartComponent} from "./component/cart/cart.component";
import {LoginComponent} from "./component/login/login.component";
import {AuthGuard} from "./sercurity/auth.guard";


const routes: Routes = [
  { path:'home',component:HomeComponent},
  {
    path:'home/detail/:id',component:DetailComponent,canActivate:[AuthGuard]
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
