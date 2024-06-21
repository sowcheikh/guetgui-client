import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class BergerService {

  constructor(private http: HttpClient) { }
  // register
  register(data: any) {
    return this.http.post(`${environment.apiUrl}/bergers`, data);
  }
}
