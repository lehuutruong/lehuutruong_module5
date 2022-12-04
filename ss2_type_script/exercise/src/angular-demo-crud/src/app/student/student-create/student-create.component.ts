import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Class} from '../../model/class';
import {StudentService} from '../../service/student.service';
import {Router} from '@angular/router';
import {ClassService} from 'src/app/service/class.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm: FormGroup;
  classList: Class[] | undefined;

  constructor(private studentService: StudentService,
              private router: Router,
              private builder: FormBuilder,
              private classService: ClassService) {
  }

  ngOnInit(): void {
    this.classService.getAll().subscribe(data => {
      // @ts-ignore
      this.classList = data;
      this.studentForm = this.builder.group({
        id: ['No Name', [Validators.required]],
        name: [],
        point: [],
        gender: [],
        class: []
      });
    });
  }

  submit() {
    if (this.studentForm.valid) {
      this.studentService.saveStudent(this.studentForm.value).subscribe(data => {
        this.router.navigateByUrl('/student/list');
      });
    }
  }
}
