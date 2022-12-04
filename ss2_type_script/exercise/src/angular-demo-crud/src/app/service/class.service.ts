import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../environments/environment';
import {Class} from '../model/class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Class> {
    return this.httpClient.get<Class>(environment.url_api_class);
  }
}
