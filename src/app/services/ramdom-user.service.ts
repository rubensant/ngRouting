import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ResultsRandom } from '../models/randomuser';

@Injectable({
  providedIn: 'root',
})
export class RamdomUserService {
  constructor(private http: HttpClient) {}

  getRandomContacts(n?: number, gender?: 'female' | 'male'): Observable<any> {
    let params: HttpParams = new HttpParams();

    if (gender) params = params.set('gender', gender);
    if (n) params = params.set('results', n);

    return this.http
      .get<ResultsRandom>('https://randomuser.me/api', { params })
      .pipe(retry(2), catchError(this.handleError));
  }

  getRandomContact(n: number): void {}

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`An error has ocurred: ${error.message || error.error}`);
    } else {
      console.error(
        `Error in the backend: ${error.status}. The error is ${error.error}`
      );
    }

    return throwError(() => new Error('Something has gone wrong'));
  }
}
