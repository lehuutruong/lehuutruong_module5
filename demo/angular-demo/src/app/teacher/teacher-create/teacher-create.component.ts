import {Component, OnInit} from '@angular/core';
import {Class} from "../../model/class";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {TeacherService} from "../../service/teacher.service";
import {ClassService} from "../../service/class.service";
import {Router} from "@angular/router";
import {Teacher} from "../../model/teacher";


@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {
  teacherForm: FormGroup;
  classList: Class[];
  teachList: Teacher[];

  constructor(private teacherService: TeacherService,
              private classService: ClassService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.classService.getAll().subscribe(data => {
      // @ts-ignore
      this.classList = data;
      console.log(data);
    });
    this.teacherService.getAll().subscribe(data => {
      this.teachList = data;
      this.teacherForm = this.formBuilder.group({
        id: ['', [Validators.required]],
        name: ['', [Validators.required]],
        point: ['', [Validators.required]],
        class: [, [Validators.required]],
      },{validators: this.areEqual});
    });
  }

  submit() {
    if (this.teacherForm.valid) {
      this.teacherService.saveTeacher(this.teacherForm.value).subscribe(data => {
        this.router.navigateByUrl("teacher/list");
      })
    }
  }
  areEqual:ValidatorFn=(control:AbstractControl ): ValidationErrors | null=>{
    let name =control.get("name").value;
    let result = null;
    this.teachList.forEach(value => {
      if(name === value.name) {
        result = {areEqual: true};
      }
    })
    return result;
  }
}
