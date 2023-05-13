import { Injectable } from '@angular/core';
import { product } from '../product/product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, Observable, throwError } from 'rxjs';
import { Category } from '../category/category';

@Injectable()

export class ProductService {
  path = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }
  getProduct(categoryId: Category[]): Observable<product[]> {
    let newPath = this.path;

    if (categoryId) {
      newPath += "?categoryId=" + categoryId;
    }

    return this.http.get<product[]>(newPath).pipe(
      catchError(this.handleError),
      tap(data => console.log(JSON.stringify(data)))
    );
  }
  addProduct(product:product):Observable <product>{
 const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'Token'
  })
}
  return this.http.post<product>(this.path,product,httpOptions).pipe(
    catchError(this.handleError),
    tap(data => console.log(JSON.stringify(data)))
  );
  }
  
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) { errorMessage = 'bir hata oluştu' + err.error.message; }
    else { errorMessage = 'Sistemsel Bir Hata' }
    return throwError(errorMessage);
  }

}
