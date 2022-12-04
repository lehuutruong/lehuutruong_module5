import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherListComponent} from "./teacher/teacher-list/teacher-list.component";
import {TeacherCreateComponent} from "./teacher/teacher-create/teacher-create.component";


const routes: Routes = [
  {
    path:"teacher/list",
    component:TeacherListComponent
  },
  {
    path:"teacher/create",
    component:TeacherCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
