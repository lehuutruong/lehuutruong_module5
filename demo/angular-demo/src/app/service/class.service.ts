import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Class} from "../model/class";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient: HttpClient) {
  }

  // @ts-ignore
  getAll(): Observable<Class> {
   return  this.httpClient.get<Class>(environment.url_class);
  }
}
