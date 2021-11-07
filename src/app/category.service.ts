import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient:HttpClient ) { }

  getAllCategorys()
  {
    return this.httpclient.get<any>('https://itbs-backend.herokuapp.com/category/all')
  }
  deleteCategory(id:string)
  {
    return this.httpclient.delete<any>('https://itbs-backend.herokuapp.com/category/delete/'+id)
  }
  addCategory(category:Category)
  {
    return this.httpclient.post<any>('https://itbs-backend.herokuapp.com/category/add',category)
  }
}
