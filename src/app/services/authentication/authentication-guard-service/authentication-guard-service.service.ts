import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../authentication-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardServiceService implements CanActivate {

  constructor(public authenticationService: AuthenticationService, public router: Router) {}

  canActivate(): boolean {
    if (!this.authenticationService.isUserAuthenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
