import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from '../classes/Role';
import { UserCreateService } from '../services/user-create-service/user-create.service';

@Component({
  selector: 'app-users',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  userCreateForm: FormGroup;
  isCaptchaNotResolved = true;
  rolesList = UserCreateComponent.setupRoles();
  rolesCheckStatusList = this.setupCheckedRolesList();
  isUserActive = true;
  isFormSubmitted = false;

  constructor (
    private formBuilder: FormBuilder,
    private userCreateService: UserCreateService
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
    this.userCreateForm = this.createUsersCreateForm();
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
      ],
      active: []
    });
  }

  captchaResolved(): void {
    this.isCaptchaNotResolved = false;
  }

  changeStyleOnCheckStatusChange(index: number): void {
    this.rolesCheckStatusList[index] = !this.rolesCheckStatusList[index];
  }

  createUser(): void {
    this.isFormSubmitted = true;

    if (this.userCreateForm.valid) {
      const userCreateFormAsJson = JSON.stringify(this.userCreateForm.getRawValue());
      this.userCreateService.sendUserCreateForm(userCreateFormAsJson);
    }
  }
}
