import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserApplicationService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  private jobApplicationUri = 'http://localhost:8090/jobs';
  candidateFirstName = '';

  static createHeader(): Object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
  }

  saveUserApplication(candidateApplicationJson: String): void {
    const header = UserApplicationService.createHeader();

    this.http
      .post(this.jobApplicationUri, candidateApplicationJson, header)
      .subscribe(
        result => {
          this.candidateFirstName = result['firstName'];
          this.router.navigate(['application/success']);
        }
      );
  }

  getCandidateFirstName(): string {
    return this.candidateFirstName;
  }
}
