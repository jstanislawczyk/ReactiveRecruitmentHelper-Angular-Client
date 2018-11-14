import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  loginFailed:boolean = false;

  constructor(private formBuilder:FormBuilder) { }

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
    
  }
}