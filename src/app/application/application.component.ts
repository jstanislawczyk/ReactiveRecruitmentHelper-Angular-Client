import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  applicationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.applicationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      jobPosition: ['', Validators.required],
      experienceYears: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  sendApplication() {

  }
}
