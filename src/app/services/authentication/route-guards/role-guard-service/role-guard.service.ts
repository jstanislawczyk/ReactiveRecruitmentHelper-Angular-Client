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
    let hasExpectedRole = false;

    if(this.authenticationService.userData != null) {
      this.authenticationService.userData.roles.forEach(role => {
        if(role.authority === expectedRole) {
          hasExpectedRole = true;
        }
      })
    }

    if(!hasExpectedRole) {
      this.router.navigate(['login']).then();
    }

    return hasExpectedRole;
  }
}
