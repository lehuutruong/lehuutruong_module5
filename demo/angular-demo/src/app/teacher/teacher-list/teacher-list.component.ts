import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../service/teacher.service";
import {Teacher} from 'src/app/model/teacher';
import {ClassService} from "../../service/class.service";
import {Class} from "../../model/class";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teacher: Teacher[] = [];
  classList: Class[] = [];
  p: number;
  deleteTeacher: Teacher;
  message: string;
  nameSearch: string;
  classroomSearch: string;
  number1: number;
  number2: number;
  detail: Teacher;
  date1: string = "";
  date2: string = "";

  constructor(private teacherService: TeacherService, private classService: ClassService) {
  }

  ngOnInit(): void {
    this.nameSearch = "";
    this.classroomSearch = "";
    this.classService.getAll().subscribe(data => {
      // @ts-ignore
      this.classList = data;
    })
    this.teacherService.getAll().subscribe(data => {
      this.teacher = data;
    }, error => {
      console.log("this error");
    }, () => {
      console.log("complete")
    })
  }

  teacherDelete(id: number) {
    this.teacherService.findById(id).subscribe(data => {
      console.log(data);
      this.deleteTeacher = data;
    });
  }

  deleteTeacherById(id: any) {
    this.teacherService.deleteTeacher(id).subscribe(data => {
      this.message = 'Delete success!';
      this.ngOnInit();
    }, error => {
      this.message = 'Delete not success!';
    });
  }

  detailTeacher(id: number) {
    this.teacherService.findById(id).subscribe(data => {
      // @ts-ignore
      this.detail = data;
    })
  }

  search() {
    if (this.nameSearch == '' && this.classroomSearch == '') {
      this.ngOnInit()
    }
    this.teacherService.searchByNameAndClass(this.nameSearch, this.classroomSearch).subscribe(data => {
      // @ts-ignore
      this.teacher = data;
    });
  }

  searchPoint() {
    // @ts-ignore
    this.teacherService.searchByPoint(this.number1, this.number2).subscribe(data => {
      // @ts-ignore
      this.teacher = data;
    })
  }

  searchDateOfBirth() {
    this.teacherService.getAll().subscribe(
      data => {
        this.teacher = data.filter(value => {
          const format = new Date(value.dayOfBirth);
          const startDate = new Date(this.date1);
          const endDate = new Date(this.date2);
          if (format > startDate && format < endDate) {
            return data;
          }
        });
      });
  }

  searchDateOfBirth1() {
    this.teacherService.searchByNameAndClass(this.nameSearch, this.classroomSearch).subscribe(
      data => {

        if (this.date1 !== "" && this.date2 !== ""){
          this.teacher = data.filter(value => {
            const format = new Date(value.dayOfBirth);
            const startDate = new Date(this.date1);
            const endDate = new Date(this.date2);
            if (format > startDate && format < endDate) {
              return data;
            }
            return null;
          });
        }
        else{
          this.teacher=data;
        }
      });
  }
}
