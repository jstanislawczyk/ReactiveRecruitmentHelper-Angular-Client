import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../../authentication-service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public authenticationService: AuthenticationService, public router: Router) {}

  canActivate(): boolean {
    
    return true;
  }
}
