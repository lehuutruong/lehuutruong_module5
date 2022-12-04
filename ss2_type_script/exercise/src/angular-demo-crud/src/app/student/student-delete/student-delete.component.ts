import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../service/student.service';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  constructor(private studentService: StudentService,
              private router: Router, private builder: FormBuilder) {
  }

  ngOnInit(): void {
  }
}
