import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { IProducts } from '../shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProducts[]> {
    return this.http
      .get<IProducts[]>(this.baseUrl + 'products.json')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
