import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient: HttpClient) { }
  getAllProducts() {
    return this.httpclient.get<any>("https://itbs-backend.herokuapp.com/product/all")
  }
}
