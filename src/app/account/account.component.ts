import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service/authentication.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user: User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() { 
    this.user = this.authenticationService.userData;
  }
}
