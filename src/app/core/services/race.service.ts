import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private httpClient: HttpClient) { }

getRaces() {
  return this.httpClient.get(`${environment.apiUrl}/races`);
}
getRaceById(id: number) {
  return this.httpClient.get(`${environment.apiUrl}/races/${id}`);
}
createRace(data: any) {
  return this.httpClient.post(`${environment.apiUrl}/races`, data);
}

}
