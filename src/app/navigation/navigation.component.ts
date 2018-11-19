import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication-service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  isUserAuthenticated: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isUserAuthenticated = this.authenticationService.isUserAuthenticated;
  }

  logout(): void {
    this.authenticationService.logoutUser();
    this.router.navigate(['logout']);
  }
}
