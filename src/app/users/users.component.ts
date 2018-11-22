import { Component, OnInit } from '@angular/core';
import {Role} from '../classes/Role';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  isCaptchaNotResolved = true;
  rolesList = UsersComponent.setupRoles();
  rolesCheckStatusList = this.setupCheckedRolesList();

  constructor() { }

  private static setupRoles() {
    return [
      new Role('ADMIN'),
      new Role('RECRUITER')
    ];
  }

  private setupCheckedRolesList() {
    return new Array(this.rolesList.length).fill(false);
  }

  ngOnInit() { }

  captchaResolved(): void {
    this.isCaptchaNotResolved = false;
  }

  changeStyleOnCheckStatusChange(index: number) {
    this.rolesCheckStatusList[index] = !this.rolesCheckStatusList[index];
  }
}
