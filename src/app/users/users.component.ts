import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users-service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.findUsers();
  }

  findUsers() {
    this.usersService.findUsers();
  }
}
