import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from '../model/car';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(environment.uri_api_car);
  }

  saveCar(car): Observable<Car[]> {
    return this.httpClient.post<Car[]>(environment.uri_api_car, car);
  }

  searchStart(point: string, pointEnd: string): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${environment.uri_api_car}?pointStart_like=${point}&pointEnd_like=${pointEnd}`);
  }

  update(car: Car): Observable<Car> {
    return this.httpClient.patch<Car>(environment.uri_api_car+ '/' + car.id, car);
  }

  findById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(environment.uri_api_car+ '/' + id);
  }

  remove(car: Car): Observable<Car> {
    return this.httpClient.delete<Car>(environment.uri_api_car+'/' + car.id);
  }

  showSuccessNotification(message: string) {
    // @ts-ignore
    this.toastrService.error(message, 'error', {
      timeOut: 2000,
      progressBar: true,
      positionClass: 'toast-top-right',
      easing: 'ease-in'
    });
  }

  showErrorNotification(message: string) {
    // @ts-ignore
    this.toastrService.warning(message, 'warning', {
      timeOut: 2000,
      progressBar: true,
      positionClass: 'toast-top-right',
      easing: 'ease-in'
    });
  }
}
