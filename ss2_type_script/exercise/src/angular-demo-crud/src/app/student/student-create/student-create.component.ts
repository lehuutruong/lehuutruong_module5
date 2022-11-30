import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import {Class} from "../../model/class";
import {ProductService} from "../../../../../angular-product-management/src/app/service/product.service";
import {CategoryService} from "../../../../../angular-product-management/src/app/service/category.service";
import {StudentService} from "../../service/student.service";
import { Router } from '@angular/router';
import { ClassService } from 'src/app/service/class.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm: FormGroup;
  classList: Class[] | undefined;
  constructor(private studentService: StudentService, private _router: Router, private _builder:FormBuilder,private classService:ClassService) { }

  ngOnInit(): void {
    this.classService.getAll().subscribe(data=>{
      // @ts-ignore
      this.classList=data;
      this.studentForm = this._builder.group({
        id:[],
        name: [],
        point: [],
        gender:[],
        class: []
      });
    })
  }
  submit() {
    if (this.studentForm.valid) {
      this.studentService.saveStudent(this.studentForm.value).subscribe(data => {
        this._router.navigateByUrl("/student/list");
      })
    }
  }
}
