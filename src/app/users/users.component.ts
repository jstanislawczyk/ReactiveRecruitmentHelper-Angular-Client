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
  private isDeleteConfirmationPopupOpened = false;
  private userIdForDeleteConfirmation: string;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.findUsers();
  }

  findUsers() {
    this.usersService.findUsers()
      .subscribe(
        users => {
          this.usersList = <Array<User>>users;
          this.removeAllErrorsLabels();
        },
        () => this.findUsersErrorOccurred = true
      );
  }

  handleUserDelete(userId: string) {
    this.openDeleteConfirmationPopup();
    this.userIdForDeleteConfirmation = userId;
  }


  private deleteUserById(userId: string) {
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
