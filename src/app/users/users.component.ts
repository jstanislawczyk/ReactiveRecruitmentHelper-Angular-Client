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
  removeUserErrorOccurred = false;
  findUsersErrorOccurred = false;
  isDeleteConfirmationPopupOpened = false;
  userIdForDeleteConfirmation: string;
  usersListSize = 10;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.findUsers();
    this.initUsersListSize();
  }

  findUsers(): void {
    this.usersService.findUsers()
      .subscribe(
        users => {
          this.usersList = <Array<User>> users;
          this.removeAllErrorsLabels();
        },
        () => this.findUsersErrorOccurred = true
      );
  }

  initUsersListSize(): void {
    const localStorageUsersListSize = Number(localStorage.getItem("usersListSize"));

    if(localStorageUsersListSize !== 0) {
      this.usersListSize = localStorageUsersListSize;
    }
  }

  changeUsersListSize(usersListSize: number): void {
    this.setUsersListSize(usersListSize);
  }

  private setUsersListSize(usersListSize: number): void {
    this.usersListSize = usersListSize;
    localStorage.setItem("usersListSize", String(usersListSize));
  }

  handleUserDelete(userId: string): void {
    this.openDeleteConfirmationPopup();
    this.userIdForDeleteConfirmation = userId;
  }

  deleteUserById(userId: string): void {
    this.usersService.deleteUser(userId)
      .subscribe(
        () => {
          this.findUsers();
          this.closeDeleteConfirmationPopup();
        },
        () => this.removeUserErrorOccurred = true
      );
  }

  private openDeleteConfirmationPopup(): void {
    this.isDeleteConfirmationPopupOpened = true;
  }

  private closeDeleteConfirmationPopup(): void {
    this.isDeleteConfirmationPopupOpened = false;
  }

  private removeAllErrorsLabels(): void {
    this.removeUserErrorOccurred = false;
    this.findUsersErrorOccurred = false;
  }
}
