import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './ApiResponse';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(environment.api_url + environment.product_url);
  }
}
