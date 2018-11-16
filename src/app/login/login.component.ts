import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication-service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  isUserAuthenticated:boolean = false;
  isFormSubmitted:boolean = false;

  constructor(
    private formBuilder:FormBuilder,
    private authenticationService:AuthenticationService) { }

  ngOnInit() { 
    this.loginForm = this.createApplicationForm();
  }

  createApplicationForm() {
    return  this.formBuilder.group({ 
      email: [''],
      password: ['']
    })
  }

  login() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    this.authenticationService.authenticateUser(email, password);

    this.isUserAuthenticated = this.authenticationService.isUserAuthenticated;  
    this.isFormSubmitted = true;
  }
}