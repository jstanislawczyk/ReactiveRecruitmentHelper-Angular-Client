import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserApplicationService {

  private jobApplicationUri:string = 'http://localhost:8090/jobs';
  candidateFirstName:string ='';

  constructor(
    private http:HttpClient,
    private router:Router    
  ) { }

  saveUserApplication(json:String) {
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    this.http
      .post(this.jobApplicationUri, json, header)
      .subscribe(
        result => {
          this.candidateFirstName = result['firstName'];
          this.router.navigate(['application/success'])
        },
        err => console.log(`Error occured [/jobs -> POST]: ${JSON.stringify(err)}`)
      );
  }

  getCandidateFirstName() {
    return this.candidateFirstName;
  }
}
