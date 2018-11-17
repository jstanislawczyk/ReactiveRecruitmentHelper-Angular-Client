import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service/authentication.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  isUserAuthenticated:boolean;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.isUserAuthenticated = this.authenticationService.isUserAuthenticated;
  }
}
