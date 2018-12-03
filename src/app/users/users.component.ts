import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users-service/users.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: Array<User>;
  private removeUserErrorOccurred = false;
  private findUsersErrorOccurred = false;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.findUsers();
  }

  findUsers() {
    this.usersService.findUsers()
      .subscribe(
        users => this.usersList = <Array<User>> users,
        () => this.findUsersErrorOccurred = true
      );
  }

  deleteUserById(userId: string) {
    this.usersService.deleteUser(userId)
      .subscribe(
        () => {
          this.removeAllErrors();
        },
        () => this.removeUserErrorOccurred = true
      );
  }

  private removeAllErrors(): void {
    this.removeUserErrorOccurred = false;
    this.findUsersErrorOccurred = false;
  }
}
