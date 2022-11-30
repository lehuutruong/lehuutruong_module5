import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Class } from 'src/app/model/class';
import {Category} from "../../../../../angular-product-management/src/app/model/category";
import {StudentService} from "../../service/student.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ClassService} from "../../service/class.service";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentForm: FormGroup;
  id: number;
  classList: Class;

  equals(o1: Class, o2: Class) {
    return o1.id === o2.id;
  }
  constructor(private studentService:StudentService,
              private _router:Router,
              private _builder:FormBuilder,
              private activatedRoute: ActivatedRoute,
              private _classService:ClassService){ }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getStudent(this.id);
    });
  }
  getStudent(id: number) {
    this._classService.getAll().subscribe(data=>{
      this.classList=data;
      return this.studentService.findById(id).subscribe(student => {
        this.studentForm = this._builder.group({
          id: [student.id],
          name: [student.name],
          point: [student.point],
          gender: [student.gender],
          class: [student.class]
        })
      });
    })
  }
  updateStudent(id: number) {
    const student = this.studentForm.value;
    console.log(student);
    this.studentService.updateStudent(id, student).subscribe(data => {
      alert("Edit success !!!!")
    })
  }

}
