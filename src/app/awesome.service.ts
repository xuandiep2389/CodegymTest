import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Awesome} from "./Awesome";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  private readonly API_URL = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getAwesomes(count = 10): Observable<Awesome[]> {
    return this.http.get<Awesome[]>(this.API_URL).pipe(
      map(response => response.filter((post, i) => i < count))
    );
  }

  getAwesomeById(id: number): Observable<Awesome> {
    return this.http.get<Awesome>(`${this.API_URL}/${id}`);
  }

  addAwesome(awesome: Awesome): Observable<Awesome> {
    return this.http.post<Awesome>(this.API_URL, awesome);
  }

  updateAwesome(awesome: Awesome): Observable<Awesome> {
    return this.http.patch<Awesome>(`${this.API_URL}/${awesome.id}`, awesome);
  }

  deleteAwesome(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
