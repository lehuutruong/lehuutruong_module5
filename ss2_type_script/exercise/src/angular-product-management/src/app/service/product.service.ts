import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _httpClient:HttpClient) {
  }

  private products: Product[] = []

  getAll():Observable<Product> {
    return this._httpClient.get<Product>(environment.url_api);
  }
  searchByName(name:string):Observable<Product> {
    return this._httpClient.get<Product>(`${environment.url_api}?name_like=${name}`);
  }
  searchByNameAndCategory(name:string,category:string):Observable<Product> {
    return this._httpClient.get<Product>(`${environment.url_api}?name_like=${name}&category.name_like=${category}`);
  }

  saveProduct(product):Observable<Product> {
   return this._httpClient.post<Product>(environment.url_api,product);
  }

  deleteProduct(id: number):Observable<Product> {
   return this._httpClient.delete<Product>(`${environment.url_api}/${id}`);
  }

  findById(id: number) {
    return this._httpClient.get<Product>(`${environment.url_api}/${id}`);
  }

  updateProduct(id: number, product: Product) {
   return this._httpClient.put<Product>(`${environment.url_api}/${id}`,product);
  }
}
