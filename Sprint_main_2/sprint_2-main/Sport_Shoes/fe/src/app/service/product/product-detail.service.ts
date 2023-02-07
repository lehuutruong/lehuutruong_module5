import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ProductDetailDto} from "../../dto/product-detail/ProductDetailDto";
import {ProductDetail} from "../../model/product/product-detail";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  private API_PRODUCT_DETAIL = environment.API_LOCAL + 'product-detail/';

  constructor(private _httpClient: HttpClient) {
  }

  getProductDetail(productId: number): Observable<ProductDetailDto> {
    return this._httpClient.get<ProductDetailDto>(this.API_PRODUCT_DETAIL + productId);
  }

  findProductDetail(rfProductDetail: ProductDetailDto): Observable<any> {
    return this._httpClient.post<ProductDetail>(this.API_PRODUCT_DETAIL, rfProductDetail);
  }
}
