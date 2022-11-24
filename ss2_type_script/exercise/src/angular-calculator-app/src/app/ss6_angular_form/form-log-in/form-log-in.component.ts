import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-log-in',
  templateUrl: './form-log-in.component.html',
  styleUrls: ['./form-log-in.component.css']
})
export class FormLogInComponent implements OnInit {
   rsLogin:FormGroup;
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.rsLogin = this._formBuilder.group({
      email: [,[Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      password:[,[Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6}$')]]
    })
  }

  onSubmit() {
    if(this.rsLogin.valid){
      console.log(this.rsLogin.value)
    }
  }
}
