import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users-service/users.service';
import { UserPage } from '../classes/UserPage';
import { User } from '../classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: Array<User>;
  usersListSize = 10;
  currentUsersPageNumber = 0;
  usersTotalPagesNumber: Array<number>;

  removeUserErrorOccurred = false;
  findUsersErrorOccurred = false;
  updateUserActiveStatusErrorOccurred = false;

  isDeleteConfirmationPopupOpened = false;
  isActivateUserPopupOpened = false;
  isDeactivateUserPopupOpened = false;

  userIdForDeleteConfirmation: string;
  userIdForUpdateActiveStatus: string;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.initUsersListSize();
    this.findUsers();
  }

  initUsersListSize(): void {
    const localStorageUsersListSize = Number(localStorage.getItem('usersListSize'));

    if (localStorageUsersListSize !== 0) {
      this.usersListSize = localStorageUsersListSize;
    }
  }

  changePage(chosenPageNumber: number): void {
    this.currentUsersPageNumber = chosenPageNumber;
    this.findUsers();
  }

  findUsers(): void {
    let usersPage: UserPage;

    this.usersService.findUsers(this.currentUsersPageNumber, this.usersListSize)
      .subscribe(
        users => {
          usersPage = <UserPage> users;
          this.setupUsersPageData(usersPage);
          this.removeAllErrorsLabels();
        },
        () => this.findUsersErrorOccurred = true
      );
  }

  changeUsersListSize(usersListSize: number): void {
    this.usersListSize = usersListSize;
    this.currentUsersPageNumber = 0;
    localStorage.setItem('usersListSize', String(usersListSize));

    this.findUsers();
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

  handleUserActivationStatusUpdate(userId: string, userIsActive: boolean): void {
    if (userIsActive) {
      this.isDeactivateUserPopupOpened = true;
    } else {
      this.isActivateUserPopupOpened = true;
    }

    this.userIdForUpdateActiveStatus = userId;
  }

  updateUserActivationStatus(updatedActiveStatus: boolean): void {
    this.usersService.updateUserActiveStatus(this.userIdForUpdateActiveStatus, updatedActiveStatus)
      .subscribe(
        () => {
          this.findUsers();

          if (updatedActiveStatus) {
            this.closeActivateUserConfirmationPopup();
          } else {
            this.closeDeactivateUserConfirmationPopup();
          }
        },
        () => this.updateUserActiveStatusErrorOccurred = true
      );
  }

  private openDeleteConfirmationPopup(): void {
    this.isDeleteConfirmationPopupOpened = true;
  }

  private closeDeleteConfirmationPopup(): void {
    this.isDeleteConfirmationPopupOpened = false;
  }

  private closeDeactivateUserConfirmationPopup(): void {
    this.isDeactivateUserPopupOpened = false;
  }

  private closeActivateUserConfirmationPopup(): void {
    this.isActivateUserPopupOpened = false;
  }

  private removeAllErrorsLabels(): void {
    this.removeUserErrorOccurred = false;
    this.findUsersErrorOccurred = false;
  }

  private setupUsersPageData(usersPage: UserPage): void {
    this.usersList = usersPage.pageContent;
    this.usersTotalPagesNumber = Array(usersPage.totalPagesNumber).fill(0).map((x, i) => i);
  }
}
