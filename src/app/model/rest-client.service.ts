import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {CV} from './data';
import {classToPlain, plainToClass} from 'class-transformer';


@Injectable({
  providedIn: 'root',
})
export class RestClientService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl =
      environment.backend.url +
      ':' +
      environment.backend.port +
      environment.backend.prefix;
  }

  get(cvId: string): Observable<CV> {
    return this.http
      .get<CV>(this.baseUrl + `/cvs/1`)
      .pipe(
        map((data)=> CV.convert(data)),
        tap((cv) =>  {console.log('GET data:');console.log(cv)}),
        catchError(this.handleError<CV>('getCV')));
  }

  update(cv: CV): Observable<CV> {
    return this.http
      .put<CV>(this.baseUrl + '/cvs/1', classToPlain(cv))
      .pipe(
        map((data)=> CV.convert(data)),
        tap((cv) => {console.log('PUT data:');console.log(cv)}),
        catchError(this.handleError<CV>('Update CV'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error}`);
      return of(result as T);
    };
  }
}
