import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersServiceUri = 'http://localhost:8090/users';

  constructor() { }

  findUsers() {
    console.log(this.usersServiceUri);
  }
}
