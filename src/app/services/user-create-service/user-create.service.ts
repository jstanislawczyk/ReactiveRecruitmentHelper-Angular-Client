import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {

  private userCreateUri = 'http://localhost:8090/users';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  sendUserCreateForm(userDataJson: String): void {
    const header = this.createHeader();

    this.http
      .post(this.userCreateUri, userDataJson, header)
      .subscribe(
        () => this.router.navigate(['user-create/success']).then()
      );
  }

  private createHeader(): Object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Basic ${this.authenticationService.userAuthenticationToken}`
      })
    };
  }
}
