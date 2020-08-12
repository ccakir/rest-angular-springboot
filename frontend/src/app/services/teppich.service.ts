import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeppichService {

  private url = "http://localhost:8081/api/v1/teppiche";

  constructor(private httpClient: HttpClient, router: Router) { }

  getTeppichList(): Observable<any> { 
    return this.httpClient.get(this.url);
  }

  createTeppich(teppich: Object): Observable<Object> {
    
    return this.httpClient.post(this.url, teppich);
    
  }

  getTeppich(id: number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  updateTeppich(id: number, value: any): Observable<object> {
    return this.httpClient.put(`${this.url}/${id}`, value);
  }

  deleteTeppich(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  
}
