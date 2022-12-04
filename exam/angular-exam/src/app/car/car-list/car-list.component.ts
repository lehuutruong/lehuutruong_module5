import {Component, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {Home} from "../../model/home";
import {CarService} from "../../service/car.service";
import {HomeService} from "../../service/home.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carList: Car[] = [];
  homeList: Home[] = [];
  p: number;
  pointStart: string;
  pointEnd: string;
  date1: string;
  date2: string;
  carDetail: Car;

  constructor(private carService: CarService,
              private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.pointStart = "";
    this.pointEnd = '';
    this.date1 = "";
    this.date2 = "";
    this.homeService.getAll().subscribe(data => {
      // @ts-ignore
      this.homeList = data;
    })
    this.carService.getAll().subscribe(data => {
      this.carList = data;
    }, error => {
      console.log("this.error")
    })
  }

  searchByPoint() {
    this.carService.searchStart(this.pointStart, this.pointEnd).subscribe(
      data => {
        if (this.date1 !== "" && this.date2 !== "") {
          this.carList = data.filter(value => {
            const format = new Date(value.startDate);
            const startDate = new Date(this.date1);
            const endDate = new Date(this.date2);
            if (format > startDate && format < endDate) {
              return data;
            }
          });
        } else {
          this.carList = data;
        }
      });
  }

  buyConfirm(id: number) {
    this.carService.findById(id).subscribe(data => {
      this.carDetail = data;
    });
  }

  buyTicket() {
    // @ts-ignore
    this.carDetail.many = this.carDetail.many - 1;
    this.carService.update(this.carDetail).subscribe(data => {
        this.carService.showSuccessNotification('Booking Complete!');
      }, error => {
        this.carService.showErrorNotification('Booking error!');
      }, () => {
        this.ngOnInit();
      }
    );
  }
}
