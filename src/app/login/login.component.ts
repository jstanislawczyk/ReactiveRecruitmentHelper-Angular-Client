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
  loginFailed:boolean = false;

  constructor(
    private formBuilder:FormBuilder,
    private authenticationService:AuthenticationService) { }

  ngOnInit() { 
    this.loginForm = this.createApplicationForm();
  }

  createApplicationForm() {
    return  this.formBuilder.group({ 
      login: [''],
      password: ['']
    })
  }

  login() {
    const login = this.loginForm.controls.login.value;
    const password = this.loginForm.controls.password.value;  

    this.authenticationService.authenticateUser(login, password);
  }
}