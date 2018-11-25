import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {

  private userCreateUri = 'http://localhost:8090/users';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  sendUserCreateForm(userDataJson: String): void {
    const header = this.createHeader();

    this.http
      .post(this.userCreateUri, userDataJson, header)
      .subscribe(
        () => {
          this.router.navigate(['users/success']).then();
        }
      );
  }

  private createHeader(): Object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
  }
}
