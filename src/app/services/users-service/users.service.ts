import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication-service/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersServiceUri = 'http://localhost:8090/users';
  private header = this.createHeader();

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  findUsers(pageNumber: number, pageSize: number): Observable<Object> {
    return this.http
      .get(this.createUsersPaginationUriWithParams(pageNumber, pageSize), this.header);
  }

  deleteUser(userId: string): Observable<Object> {
    return this.http
      .delete(`${this.usersServiceUri}/${userId}`, this.header);
  }

  updateUserActiveStatus(userId: string, updatedActiveStatus: boolean): Observable<Object> {
    const jsonWithActiveStatus = `{"active": "${updatedActiveStatus}"}`;

    return this.http
      .patch(`${this.usersServiceUri}/${userId}`, jsonWithActiveStatus, this.header);
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

  private createUsersPaginationUriWithParams(pageNumber, pageSize) {
    return `${this.usersServiceUri}?page=${pageNumber}&size=${pageSize}`;
  }
}
