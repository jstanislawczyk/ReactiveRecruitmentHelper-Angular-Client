import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication-service/authentication.service';
import {User} from '../../classes/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersServiceUri = 'http://localhost:8090/users';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  findUsers(): Observable<Object> {
    const header = this.createHeader();

    return this.http
      .get(this.usersServiceUri, header);
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
