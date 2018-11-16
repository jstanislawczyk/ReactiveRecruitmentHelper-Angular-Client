import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserAuthenticated:boolean = false;
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
      .toPromise()
        .then(result => {
          this.isUserAuthenticated = <boolean> result;

          if(this.isUserAuthenticated) {  
            this.router.navigate(['']);
          }
        })
        .catch(err => {
          this.isUserAuthenticated = false;
        })
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
