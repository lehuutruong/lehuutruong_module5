import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teacher} from "../model/teacher";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpClient: HttpClient) {
  }
  // @ts-ignore
  getAll(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(environment.url_api_teacher)
  }
  deleteTeacher(id:number):Observable<Teacher>{
    return this.httpClient.delete<Teacher>(`${environment.url_api_teacher}/${id}`);
  }
  findById(id:number):Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${environment.url_api_teacher}/${id}`);
  }
  searchByNameAndClass(name:string,classes:string):Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`${environment.url_api_teacher}?name_like=${name}&class.name_like=${classes}`);
  }
  searchByPoint(number1:number,number2:number):Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${environment.url_api_teacher}?point_gte=${number1}&point_lte=${number2}`);
  }

  saveTeacher(teacher):Observable<Teacher> {
    return this.httpClient.post<Teacher>(environment.url_api_teacher,teacher);

  }
}
