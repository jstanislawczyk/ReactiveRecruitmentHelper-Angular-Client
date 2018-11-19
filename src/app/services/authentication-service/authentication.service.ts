import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
    this.loadUserAuthenticationStatus();
  }

  isUserAuthenticated = false;
  authenticationUri = 'http://localhost:8090/login';

  static createHeader(): Object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  static createUserDataJson(email, password): JSON {
    return JSON.parse(`{"email": "${email}", "password": "${password}"}`);
  }

  authenticateUser(email: string, password: string) {
    const header = AuthenticationService.createHeader();
    const userDataJson = AuthenticationService.createUserDataJson(email, password);

    return this.http
      .post(this.authenticationUri, userDataJson, header)
      .pipe(
        map(result => {
          this.isUserAuthenticated = <boolean>result;
          localStorage.setItem('isUserAuthenticated', `${this.isUserAuthenticated}`);
        })
      );
  }

  loadUserAuthenticationStatus(): void {
    this.isUserAuthenticated = JSON.parse(localStorage.getItem('isUserAuthenticated'));
  }

  logoutUser(): void {
    this.isUserAuthenticated = false;
    localStorage.removeItem('isUserAuthenticated');
  }
}
