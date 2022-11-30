import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../model/student';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }
   getAll():Observable<Student[]>{
     return this._httpClient.get<Student[]>(environment.url_api_demo);
   }
  searchByName(name:string):Observable<Student> {
    return this._httpClient.get<Student>(`${environment.url_api_demo}?name_like=${name}`);
  }
  searchByNameAndStudent(name:string,classes:string):Observable<Student>{
    return this._httpClient.get<Student>(`${environment.url_api_demo}?name_like=${name}&class.name_like=${classes}`);
  }
  saveStudent(student):Observable<Student> {
    return this._httpClient.post<Student>(environment.url_api_demo,student);
  }

  deleteStudent(id: number):Observable<Student> {
    return this._httpClient.delete<Student>(`${environment.url_api_demo}/${id}`);
  }

  findById(id: number) {
    return this._httpClient.get<Student>(`${environment.url_api_demo}/${id}`);
  }

  updateStudent(id: number, student: Student) {
    return this._httpClient.put<Student>(`${environment.url_api_demo}/${id}`,student);
  }
}
