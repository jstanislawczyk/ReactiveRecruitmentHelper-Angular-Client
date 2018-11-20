import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication-service/authentication.service';
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
  user: User;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isUserAuthenticated = this.authenticationService.isUserAuthenticated;
    this.user = this.authenticationService.userData;

    this.checkUserRoles();
  }

  logout(): void {
    this.authenticationService.logoutUser();
    this.router.navigate(['logout']).then();
  }

  private checkUserRoles() {
    if (this.user !== null) {
      this.user.roles.forEach(role => {
        if (role.authority === 'ADMIN') {
          this.isAdmin = true;
        }

        if (role.authority === 'RECRUITER') {
          this.isRecruiter = true;
        }
      });
    }
  }
}
