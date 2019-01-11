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

  findCandidates(pageNumber: number, pageSize: number, jobPosition: string, experienceYears: string): Observable<Object> {
    return this.http
      .get(this.createCandidatesPaginationUriWithParams(pageNumber, pageSize, jobPosition, experienceYears), this.header);
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

  private createCandidatesPaginationUriWithParams(pageNumber: number, pageSize: number, jobPosition: string, experienceYears: string) {
    const paginationParams = this.createPaginationParams(pageNumber, pageSize);
    const filterParams = this.createFilterParams(jobPosition, experienceYears);

    return `${paginationParams}${filterParams}`;
  }

  private createPaginationParams(pageNumber: number, pageSize: number): string {
    return `${this.candidatesServiceUri}?page=${pageNumber}&size=${pageSize}`;
  }

  private createFilterParams(jobPosition: string, experienceYears: string): string {
    let filterParams = '';

    if (!!jobPosition) {
      filterParams += `&jobPosition=${jobPosition}`;
    }

    if (!!experienceYears) {
      filterParams += `&experienceYears=${experienceYears}`;
    }

    return filterParams;
  }
}
