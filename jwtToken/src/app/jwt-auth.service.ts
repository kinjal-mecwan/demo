import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {


url="https://localhost:44369/api/signIn/"
loginUrl="https://localhost:44369/api/signIn/login"
headers = new HttpHeaders().set('Content-Type', 'application/json');
currentUser = {}
  constructor(private http: HttpClient, public router: Router) { }
  signUp(user: User): Observable<any> {
    return this.http.post(this.url, user).pipe(catchError(this.handleError));
  }

  signIn(user: User) {
    debugger
    return this.http
      .post<any>(this.loginUrl, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token',res.token );
       
        this.getUserProfile(res.email).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['user-profile/' +res.email]);
        });
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  getUserProfile(id: any): Observable<any> {
    return this.http.get(this.url+id, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
