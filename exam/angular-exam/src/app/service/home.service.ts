import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Home} from "../model/home";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Home[]> {
    return this.httpClient.get<Home[]>(environment.uri_api_home+'/api/home/v1')
  }
}
