import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  rsStudent: FormGroup;
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.rsStudent=this._formBuilder.group({
      name:['No Name',[Validators.required,Validators.minLength(5)]],
      point:[90],
      address:[],
      password:[],
      confirmPassword:[]
    })
  }

  onSubmit() {
    if(this.rsStudent.valid){
      console.log(this.rsStudent.value)
    }
  }
}
