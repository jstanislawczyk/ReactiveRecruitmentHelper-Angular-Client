import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {UserApplicationService} from '../services/application-service/user-application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  applicationForm: FormGroup;
  maxInputGroupSize = 15;
  extendButtonDisabled = false;
  decreaseButtonEnabled = false;
  isSubmitted = false;
  isCaptchaNotResolved = true;

  constructor(
    private userApplication: UserApplicationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.applicationForm = this.createApplicationForm();
  }

  captchaResolved(): void {
    this.isCaptchaNotResolved = false;
  }

  createApplicationForm(): FormGroup {
    return this.formBuilder.group({
      firstName: [
        '', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]
      ],
      lastName: [
        '', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]
      ],
      jobPosition: [
        '', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]
      ],
      experienceYearsInJobPosition: [
        '', [Validators.required, Validators.min(0)]
      ],
      technologies: this.formBuilder.array([
        this.createTechnology()
      ]),
      candidateMessage: [
        '', [Validators.maxLength(200)]
      ],
    });
  }

  createTechnology(): FormGroup {
    return this.formBuilder.group({
      name: [
        '', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]
      ],
      knowledgeLevel: [
        '', [Validators.required, Validators.min(1), Validators.max(10)]
      ]
    });
  }

  expandTechnologyInputGroup(): void {
    const technologiesList = <FormArray>this.applicationForm.controls.technologies;

    if (technologiesList.length < this.maxInputGroupSize) {
      technologiesList.push(this.createTechnology());

      if (technologiesList.length === 2) {
        this.decreaseButtonEnabled = true;
      }

      if (technologiesList.length === this.maxInputGroupSize) {
        this.extendButtonDisabled = true;
      }
    }
  }

  decreaseTechnologyInputGroup(): void {
    const technologiesList = <FormArray>this.applicationForm.controls.technologies;

    if (technologiesList.length === 2) {
      this.decreaseButtonEnabled = false;
    } else if (technologiesList.length === this.maxInputGroupSize) {
      this.extendButtonDisabled = false;
    }

    technologiesList.removeAt(technologiesList.length - 1);
  }

  sendApplication(): void {
    this.isSubmitted = true;

    if (this.applicationForm.valid) {
      const formAsJson = JSON.stringify(this.applicationForm.getRawValue());
      this.userApplication.saveUserApplication(formAsJson);
    }
  }
}
