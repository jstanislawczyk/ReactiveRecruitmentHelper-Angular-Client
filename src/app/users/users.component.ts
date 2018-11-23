import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role} from '../classes/Role';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersCreateForm: FormGroup;
  isCaptchaNotResolved = true;
  rolesList = UsersComponent.setupRoles();
  rolesCheckStatusList = this.setupCheckedRolesList();
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  private static setupRoles() {
    return [
      new Role('ADMIN'),
      new Role('RECRUITER')
    ];
  }

  private setupCheckedRolesList() {
    return new Array(this.rolesList.length).fill(false);
  }

  ngOnInit() { 
    this.usersCreateForm = this.createUsersCreateForm();
  }

  createUsersCreateForm(): FormGroup {
    return this.formBuilder.group({
      email: [
        '', [Validators.required, Validators.email]
      ],
      password: [
        '', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]
      ],
      firstName: [
        '', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]
      ],
      lastName: [
        '', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]
      ]
    });
  }

  captchaResolved(): void {
    this.isCaptchaNotResolved = false;
  }

  changeStyleOnCheckStatusChange(index: number) {
    this.rolesCheckStatusList[index] = !this.rolesCheckStatusList[index];
  }

  createUser() {
    this.isFormSubmitted = true;
  }
}
