import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication-service/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  private candidatesServiceUri = 'http://localhost:8090/jobs';
  private header = this.createHeader();

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) { }

  findCandidates(pageNumber: number, pageSize: number): Observable<Object> {
    return this.http
      .get(this.createCandidatesPaginationUriWithParams(pageNumber, pageSize), this.header);
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

  private createCandidatesPaginationUriWithParams(pageNumber, pageSize) {
    return `${this.candidatesServiceUri}?page=${pageNumber}&size=${pageSize}`;
  }
}
