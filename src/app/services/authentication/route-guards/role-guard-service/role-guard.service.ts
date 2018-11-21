import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from '../../authentication-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const userHasExpectedRole = this.authenticationService.userHasExpectedRole(expectedRole);

    if (!userHasExpectedRole) {
      this.router.navigate(['login']).then();
    }

    return userHasExpectedRole;
  }
}
