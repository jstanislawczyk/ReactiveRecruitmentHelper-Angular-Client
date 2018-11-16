import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated:boolean = false;
  authenticationUri:string = 'http://localhost:8090/login';

  constructor(
    private http:HttpClient,
    private router:Router    
  ) { }

  authenticateUser(email:string, password:string) {
    const header = this.createHeader();
    const userDataJson = this.createUserDataJson(email, password); 

    this.http
      .post(this.authenticationUri, userDataJson, header)
      .subscribe(
        result => {
          console.log(result)
        },
        err => console.log('Could not authenticate user')
      );
  }

  createHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  createUserDataJson(email, password) {
    return JSON.parse(`{"email": "${email}", "password": "${password}"}`);
  }
}
