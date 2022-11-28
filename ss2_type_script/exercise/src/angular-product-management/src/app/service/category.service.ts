import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient:HttpClient) { }
  getAll():Observable<Category> {
    return this._httpClient.get<Category>(environment.url_api_category);
  }

  saveCategory(category):Observable<Category> {
    return this._httpClient.post<Category>(environment.url_api_category,category);
  }

  deleteCategory(id: number):Observable<Category> {
    return this._httpClient.delete<Category>(`${environment.url_api_category}/${id}`);
  }

  findById(id: number) {
    return this._httpClient.get<Category>(`${environment.url_api_category}/${id}`);
  }

  updateCategory(id: number, category: Category) {
    return this._httpClient.put<Category>(`${environment.url_api_category}/${id}`,category);
  }
}
