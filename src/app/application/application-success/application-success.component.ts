import { Component, OnInit } from '@angular/core';
import { UserApplicationService } from '../../services/application-service/user-application.service';

@Component({
  selector: 'app-application-success',
  templateUrl: './application-success.component.html',
  styleUrls: ['./application-success.component.scss']
})
export class ApplicationSuccessComponent implements OnInit {

  candidateFirstName: string;

  constructor(private userApplicationService: UserApplicationService) { }

  ngOnInit() {
    this.candidateFirstName = this.userApplicationService.getCandidateFirstName();
  }
}
