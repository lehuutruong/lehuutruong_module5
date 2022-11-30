import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import {StudentCreateComponent} from "./student/student-create/student-create.component";
import {StudentEditComponent} from "./student/student-edit/student-edit.component";
import {StudentDeleteComponent} from "./student/student-delete/student-delete.component";


const routes: Routes = [
  {
    path: 'student/list',
    component: StudentListComponent
  },
  {
    path: 'student/create',
    component: StudentCreateComponent
  },
  {
    path: 'student/edit/:id',
    component: StudentEditComponent
  }, {
    path: 'student/delete/:id',
    component: StudentDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
