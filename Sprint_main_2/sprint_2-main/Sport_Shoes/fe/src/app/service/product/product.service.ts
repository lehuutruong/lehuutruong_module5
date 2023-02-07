import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_PRODUCT_PAGE = environment.API_LOCAL + 'products/';

  constructor(private _httpClient: HttpClient) {
  }

  getAllProduct(pageNumber: number, rfSearch: any): Observable<any> {
    return this._httpClient.post(this.API_PRODUCT_PAGE + '?page=' + pageNumber, rfSearch);
  }

  getAllProductByBrandId(brandId: number): Observable<any> {
    return this._httpClient.get(this.API_PRODUCT_PAGE + brandId);
  }
}
