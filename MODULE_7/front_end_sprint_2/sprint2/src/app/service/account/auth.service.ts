import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SignInForm} from "../../dto/sign-in-form";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }
  signIn(value: SignInForm): Observable<any> {
    return this._httpClient.post<any>( 'http://localhost:8080/api/auth/signin', value);
  }
}
