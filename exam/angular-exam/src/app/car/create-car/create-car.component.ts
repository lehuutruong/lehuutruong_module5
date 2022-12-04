import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import {Home} from "../../model/home";
import {CarService} from "../../service/car.service";
import {HomeService} from "../../service/home.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  carForm: FormGroup;
  homeList: Home[] = [];

  constructor(private carService: CarService,
              private homeService: HomeService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.homeService.getAll().subscribe(data => {
      this.homeList = data;
      this.carForm = this.formBuilder.group({
        price: ['', [
          Validators.required,
          Validators.pattern('^\\d+$')
        ]],
        many: ['', [
          Validators.required,
          Validators.pattern('^\\d+$')
        ]],
        pointStart: ['', [
          Validators.required
        ]],
        pointEnd: ['', [
          Validators.required
        ]],
        startDate: ['', [
          Validators.required,
          Validators.pattern('^\\d{4}[-]\\d{2}[-]\\d{2}$'),
          this.checkStartDateOnFuture
        ]],
        timeDate: ['', [
          Validators.required,
          Validators.pattern('^(([0,1][0-9])|([2][0-4]))\\:(([0-5][0-9])|(60))$')
        ]],
        home: ['', [
          Validators.required
        ]],
      },);
    })
  }

  submit() {
    if (this.carForm.valid) {
      this.carService.saveCar(this.carForm.value).subscribe(data => {
        this.router.navigateByUrl("car/list");
      })
    }
  }
  checkStartDateOnFuture(abstractControl: AbstractControl): any {
    const startDate = new Date(abstractControl.value).getTime();
    const now = new Date().getTime();
    return (startDate - now > 24 * 60 * 60 * 1000) ? null : {invalidStartDate: true};
  }
}
