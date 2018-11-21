import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../../../classes/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
    this.loadUserAuthenticationStatus();
  }

  authenticationUri = 'http://localhost:8090/login';
  userData: User;

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
          this.userData = <User> result;
          localStorage.setItem('userData', JSON.stringify(this.userData));
        })
      );
  }

  loadUserAuthenticationStatus(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  logoutUser(): void {
    this.userData = null;
    localStorage.removeItem('userData');
  }

  isUserAuthenticated(): boolean {
    return (this.userData != null);
  }
}
