import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }
  // get all animala
  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/animals`);
  }
  // get animal by id
  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/animals/${id}`);
  }
  // register
  register(data: any) {
    return this.http.post(`${environment.apiUrl}/animals`, data);
  }
  // update
  update(id: number, data: any) {
    return this.http.put(`${environment.apiUrl}/animals/${id}`, data);
  }
  // delete
  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/animals/${id}`);
  }
}
