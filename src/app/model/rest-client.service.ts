import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
