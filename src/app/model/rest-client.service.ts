import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { CV } from './data';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class RestClientService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl =
      environment.backend.url +
      ":" +
      environment.backend.port +
      environment.backend.prefix;
  }

  get(cvId : String): Observable<CV> {
    return this.http
      .get<any>(this.baseUrl + `/cvs/1`)
      .pipe(
        map((data) => Object.assign(new CV, data)),
        tap((data) => console.log(data)),
        catchError(this.handleError("getCV")))
  }

  update(cv : CV): Observable<CV> {
    return this.http
      .put(this.baseUrl + `/cvs/1`,cv,httpOptions)
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError<any>("Update CV"))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(`${operation} failed: ${error}`); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
