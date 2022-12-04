import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarListComponent} from "./car/car-list/car-list.component";
import {CreateCarComponent} from "./car/create-car/create-car.component";


const routes: Routes = [{
  path: "car/list",
  component: CarListComponent
},
  {
    path: "car/create",
    component: CreateCarComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
