import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = "/api/";
  }

  get(){
    return "asd"
  }
}
