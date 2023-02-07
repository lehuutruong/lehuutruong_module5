import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ImageDto} from "../../dto/image/ImageDto";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private API_IMAGE_LIST = environment.API_LOCAL + 'img/';

  constructor(private _httpClient: HttpClient) {
  }

  getImageOfProductDetail(rfImage: any): Observable<any> {
    return this._httpClient.post(this.API_IMAGE_LIST, rfImage);
  }
}
