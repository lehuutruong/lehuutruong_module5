import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {OderDto} from "../../dto/order/OderDto";
import {Oder} from "../../model/order/oder";

@Injectable({
  providedIn: 'root'
})
export class OderService {
  private API_ORDER = environment.API_LOCAL + 'oders/';

  constructor(private _httpClient: HttpClient) {
  }

  addNewOder(rfOder: OderDto): Observable<any> {
    return this._httpClient.post<Oder>(this.API_ORDER, rfOder);
  }

  findOderByUserId(userId: number): Observable<any> {
    return this._httpClient.get(this.API_ORDER + userId);
  }
}
