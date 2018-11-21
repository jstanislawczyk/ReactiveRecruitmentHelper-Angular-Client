import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication/authentication-service/authentication.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isUserAuthenticated = false;
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.createApplicationForm();
  }

  createApplicationForm(): FormGroup {
    return this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login(): void {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    this.authenticationService.authenticateUser(email, password)
      .subscribe(() => {
        this.isUserAuthenticated = this.authenticationService.isUserAuthenticated;

        if (this.isUserAuthenticated) {
          this.router.navigate(['']).then();
        }

        this.isFormSubmitted = true;
      },
      () => {
        this.isUserAuthenticated = false;
        this.isFormSubmitted = true;
        localStorage.setItem('userAuthenticated', `${this.isUserAuthenticated}`);
      });
  }
}
