import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";
import {ClassService} from "../../service/class.service";
import {Class} from "../../model/class";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  p: number;
  students: Student[] = [];
  classList: Class[] = [];
  name: any;
  classes: string = '--All--';

  constructor(private _studentService: StudentService, private  classService: ClassService) {

  }

  ngOnInit(): void {
    this.name = '';
    this.classes = '';
    this.classService.getAll().subscribe(data => {
      // @ts-ignore
      this.classList = data;
    })
    this._studentService.getAll().subscribe(data => {
      // @ts-ignore
      this.students = data
    }, error => {
      console.log("get list product error")
    }, () => {
      console.log("get list product complete")
    })

  }

  search() {
    if (this.name == "" && this.classes == "--All--") {
      this.ngOnInit()
    }
    this._studentService.searchByNameAndStudent(this.name, this.classes).subscribe(data => {
      // @ts-ignore
      this.students = data;
    })
  }
}
