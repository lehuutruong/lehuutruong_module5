import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgeService {
  private API_SIZE_LIST = environment.API_LOCAL + 'age/';

  constructor(private _httpClient: HttpClient) {
  }

  getAllAge(): Observable<any> {
    return this._httpClient.get(this.API_SIZE_LIST);
  }

  getAllAgeDto(rfAge: any): Observable<any> {
    return this._httpClient.post(this.API_SIZE_LIST, rfAge);
  }
}
