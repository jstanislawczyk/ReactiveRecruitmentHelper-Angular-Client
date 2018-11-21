import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication/authentication-service/authentication.service';
import {Router} from '@angular/router';
import {User} from '../classes/User';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isUserAuthenticated: boolean;
  isRecruiter = false;
  isAdmin = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() { }

  ngDoCheck() {
    this.isUserAuthenticated = this.authenticationService.isUserAuthenticated();
    this.checkUserRoles();
  }

  logout(): void {
    this.setUserRolesToDefault();
    this.authenticationService.logoutUser();
    this.router.navigate(['logout']).then();
  }

  private checkUserRoles() {
    if(this.authenticationService.userHasExpectedRole('RECRUITER')) {
      this.isRecruiter = true;
    }

    if(this.authenticationService.userHasExpectedRole('ADMIN')) {
      this.isAdmin = true;
    }
  }

  private setUserRolesToDefault() {
    this.isAdmin = false;
    this.isRecruiter = false;
  }
}
