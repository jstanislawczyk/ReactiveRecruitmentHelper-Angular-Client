import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication-service/authentication.service';
import {User} from '../../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersServiceUri = 'http://localhost:8090/users';
  private usersList: Array<User>;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  findUsers(): void {
    const header = this.createHeader();

    this.http
      .get(this.usersServiceUri, header)
      .subscribe(
        (result) => console.log(result)
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
