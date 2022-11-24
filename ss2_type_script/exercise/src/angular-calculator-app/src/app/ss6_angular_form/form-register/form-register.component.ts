import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
export const reConfirmPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passWord = control.get("password");
  const confirmPassword = control.get("confirmPassword");
  if (passWord && confirmPassword && passWord.touched && passWord.value != confirmPassword.value) {
    return {"reConfirmPassValidName": true};
  } else {
    return null;
  }
}
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
     }, {validators: reConfirmPass})
  }

  onSubmit() {
    if(this.rsFormRegister.valid){
      console.log(this.rsFormRegister.value)
    }
  }
}
