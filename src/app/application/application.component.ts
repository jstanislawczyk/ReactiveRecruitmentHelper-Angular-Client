import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  applicationForm: FormGroup;
  technologyInputGroupSize:Number[] = [1] 
  maxInputGroupSize:Number = 4;
  extendButtonDisabled: Boolean = false;
  decreaseButtonEnabled: Boolean = false;

  constructor(private formBuilder: FormBuilder) { 
    this.applicationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      jobPosition: ['', Validators.required],
      experienceYears: ['', Validators.required],
      message: ['', Validators.required],
      technologyName: ['', Validators.required],
      technologyKnowledgeLevel: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  sendApplication() {

  }

  expandTechnologyInputGroup() {
    if(this.technologyInputGroupSize.length < this.maxInputGroupSize) {
      this.technologyInputGroupSize.push(1);

      if(this.technologyInputGroupSize.length === 2) {
        this.decreaseButtonEnabled = true;
      }

      if(this.technologyInputGroupSize.length === this.maxInputGroupSize) {
        this.extendButtonDisabled = true;
      }
    } 
  }

  decreaseTechnologyInputGroup() {
    if(this.technologyInputGroupSize.length === 2) {
      this.decreaseButtonEnabled = false;
    } else if(this.technologyInputGroupSize.length === this.maxInputGroupSize) {
      this.extendButtonDisabled = false;
    } 

    this.technologyInputGroupSize.pop();   
  }
}
