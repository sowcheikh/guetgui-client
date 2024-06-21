import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import { jwtDecode } from "jwt-decode";
import {CURRENT_USER, TOKEN_KEY} from "../../utils/constant";

export interface Response {
  user: any;
  token: string;
  expires_in: number;
  token_type: string;

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      localStorage.getItem('currentUser') || '{}'
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<Response> {
    let data = {
      email: email,
      password: password
    };
    return this.http.post<any>(`${environment.apiUrl}/login`, data).pipe(
      map((response: Response) => {
        console.log(response)
        // decode token and get user data
        const decoded: any = jwtDecode(response.token);
        localStorage.setItem(TOKEN_KEY, response.token);
        localStorage.setItem(CURRENT_USER, JSON.stringify(decoded.user));
        this.currentUserSubject.next(response);
        return response;
      })
    );
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(CURRENT_USER);
    localStorage.removeItem(TOKEN_KEY);

    this.currentUserSubject.next(null);
  }
  /**
   * Get token
   */
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
}
