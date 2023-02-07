import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private API_COLOR_LIST = environment.API_LOCAL + 'color/';

  constructor(private _httpClient: HttpClient) {
  }

  getAllColorByProductDetail(rfColor: any): Observable<any> {
    return this._httpClient.post(this.API_COLOR_LIST, rfColor);
  }
}
