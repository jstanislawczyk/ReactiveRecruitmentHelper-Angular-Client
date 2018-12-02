import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users-service/users.service';
import {User} from '../classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private usersList: Array<User>;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.findUsers();
  }

  findUsers() {
    this.usersService.findUsers()
      .subscribe(users =>
        this.usersList = <Array<User>> users
      );
  }
}
