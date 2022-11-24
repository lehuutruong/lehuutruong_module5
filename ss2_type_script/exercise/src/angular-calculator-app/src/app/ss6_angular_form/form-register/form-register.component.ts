import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
   rsFormRegister:FormGroup
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
     this.rsFormRegister=this._formBuilder.group({
       email:['',[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
       password:['',[Validators.required]],
       confirmPassword:['',[Validators.required]],
       country:['',[Validators.required]],
       age:['',[Validators.required,Validators.min(18)]],
       gender:['',[Validators.required]],
       phone:['',[Validators.required,Validators.pattern('^\\+84\\d{9,10}$')]]
     })
  }

  onSubmit() {
    if(this.rsFormRegister.valid){
      console.log(this.rsFormRegister.value)
    }
  }
}
