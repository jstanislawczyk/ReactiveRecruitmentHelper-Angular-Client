import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Role } from '../classes/Role';
import { UserCreateService } from '../services/user-create-service/user-create.service';

@Component({
  selector: 'app-users',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  userCreateForm: FormGroup;
  rolesList = this.setupRoles();
  rolesCheckStatusList = this.setupCheckedRolesList();
  isCaptchaNotResolved = true;
  isFormSubmitted = false;

  constructor (
    private formBuilder: FormBuilder,
    private userCreateService: UserCreateService
  ) { }

  ngOnInit() {
    this.userCreateForm = this.createUsersCreateForm();
  }

  private setupRoles(): Array<Role> {
    return [
      new Role('ADMIN'),
      new Role('RECRUITER')
    ];
  }

  private setupCheckedRolesList(): Array<boolean> {
    return new Array(this.rolesList.length).fill(false);
  }

  private createUsersCreateForm(): FormGroup {
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
      roles: this.formBuilder.array([]),
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
      this.userCreateForm.controls.roles = this.createUserRoleList();
      const userCreateFormAsJson = JSON.stringify(this.userCreateForm.getRawValue());

      this.userCreateService.sendUserCreateForm(userCreateFormAsJson);
    }
  }

  private createUserRoleList(): FormArray {
    const userRolesList = this.formBuilder.array([]);

    this.rolesCheckStatusList.forEach((roleStatus, index) => {
      if (roleStatus) {
        userRolesList.push(this.createUserRole(this.rolesList[index].authority));
      }
    });

    return userRolesList;
  }

  private createUserRole(authority: string): FormGroup {
    return this.formBuilder.group({
      authority: [authority]
    });
  }
}
