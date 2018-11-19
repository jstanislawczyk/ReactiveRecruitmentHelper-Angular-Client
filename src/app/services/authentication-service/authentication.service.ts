import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserAuthenticated:boolean = false;
  authenticationUri:string = 'http://localhost:8090/login';

  constructor(
    private http:HttpClient  
  ) { }

  authenticateUser(email:string, password:string) {
    const header = this.createHeader();
    const userDataJson = this.createUserDataJson(email, password); 

    return this.http
      .post(this.authenticationUri, userDataJson, header)
      .pipe(
        map(result => {
          this.isUserAuthenticated = <boolean> result;
          localStorage.setItem('isUserAuthenticated', `${this.isUserAuthenticated}`);
        })
      )
  }

  createHeader():Object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  createUserDataJson(email, password):JSON {
    return JSON.parse(`{"email": "${email}", "password": "${password}"}`);
  }

  loadUserAuthenticationStatus():void {
    this.isUserAuthenticated = JSON.parse(localStorage.getItem('isUserAuthenticated'));
  }

  logoutUser():void {
    this.isUserAuthenticated = false;
    localStorage.removeItem('isUserAuthenticated');
  }
}
