import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  path = " http://localhost:3000/categories";
  constructor(private http:HttpClient) { }
  
  getCategory():Observable<Category[]>{
    return this.http.get <Category[]>(this.path)
  }
}
