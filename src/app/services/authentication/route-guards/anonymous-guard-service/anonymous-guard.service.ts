import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../../authentication-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuardService implements CanActivate {

  constructor(public authenticationService: AuthenticationService, public router: Router) {}

  canActivate(): boolean {
    if (this.authenticationService.isUserAuthenticated()) {
      this.router.navigate(['']).then();
      return false;
    }
    return true;
  }
}
