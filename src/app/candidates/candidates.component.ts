import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  constructor() { }

  pageNumber = 10;
  pageSize = 0;

  ngOnInit() {
    this.initPaginationDetails();
  }

  private initPaginationDetails() {
    this.initPageNumber();
    this.initPageSize();
  }

  private initPageNumber() {
    const localStorageCandidatesListSize = Number(localStorage.getItem('candidatesListSize'));

    if (localStorageCandidatesListSize !== 0) {
      this.pageSize = localStorageCandidatesListSize;
    }
  }

  private initPageSize() {
    const localStorageCandidatesPageNumber = Number(localStorage.getItem('candidatesPageNumber'));

    if (localStorageCandidatesPageNumber !== 0) {
      this.pageNumber = localStorageCandidatesPageNumber;
    }
  }
}
