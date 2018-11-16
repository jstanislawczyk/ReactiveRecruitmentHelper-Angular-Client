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

  saveUserApplication(candidateApplicationJson:String) {
    const header = this.createHeader();

    this.http
      .post(this.jobApplicationUri, candidateApplicationJson, header)
      .subscribe(
        result => {
          this.candidateFirstName = result['firstName'];
          this.router.navigate(['application/success'])
        },
        err => console.log(`Error occured [/jobs -> POST]: ${JSON.stringify(err)}`)
      );
  }

  createHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
  }

  getCandidateFirstName() {
    return this.candidateFirstName;
  }
}
