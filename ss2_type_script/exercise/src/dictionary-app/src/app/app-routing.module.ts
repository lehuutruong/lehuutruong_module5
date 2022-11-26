import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import {DictionaryHomeComponent} from "./dictionary-home/dictionary-home.component";


const routes: Routes = [
  {path:'home',component:DictionaryHomeComponent},
  {path:'detail/:index',component:DictionaryDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
