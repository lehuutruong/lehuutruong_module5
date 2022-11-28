import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {Product} from "../../../../angular-product-management/src/app/model/product";
import {environment} from "../../../../angular-product-management/src/environments/environment";
import {HttpClient} from "@angular/common/http";
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private _httpClient:HttpClient) { }
  getAll():Observable<Todo> {
    // @ts-ignore
    return this._httpClient.get<Todo>(environment. url_api_todo);
  }

  saveTodo(todo):Observable<Todo> {
    // @ts-ignore
    return this._httpClient.post<Todo>(environment.url_api_todo,todo);
  }

  deleteTodo(id: number):Observable<Todo> {
    // @ts-ignore
    return this._httpClient.delete<Todo>(`${environment.url_api_todo}/${id}`);
  }

  findById(id: number) {
    // @ts-ignore
    return this._httpClient.get<Todo>(`${environment.url_api_todo}/${id}`);
  }

  updateProduct(id: number, todo: Todo) {
    // @ts-ignore
    return this._httpClient.put<Todo>(`${environment.url_api_todo}/${id}`,todo);
  }
}
