import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../services/candidates-service/candidates-service.service';
import { CandidatePage } from '../classes/CandidatePage';
import { Candidate } from '../classes/Candidate';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  constructor(private candidatesService: CandidatesService) { }

  findCandidatesErrorOccurred = false;
  pageNumber = 0;
  pageSize = 10;
  totalPagesNumber: Array<number>;
  candidates: Array<Candidate>;

  ngOnInit() {
    this.initPaginationDetails();
    this.findCandidates();
  }

  private initPaginationDetails() {
    this.initPageNumber();
    this.initPageSize();
  }

  private initPageSize() {
    const localStorageCandidatesListSize = Number(localStorage.getItem('candidatesPageSize'));

    if (localStorageCandidatesListSize !== 0) {
      this.pageSize = localStorageCandidatesListSize;
    }
  }

  private initPageNumber() {
    const localStorageCandidatesPageNumber = Number(localStorage.getItem('candidatesPageNumber'));

    if (localStorageCandidatesPageNumber !== 0) {
      this.pageNumber = localStorageCandidatesPageNumber;
    }
  }

  handleChangePageSizeButtonClick(pageSize: number) {
    this.setCandidatesPageNumber(0);
    this.setCandidatesPageSize(pageSize);
    this.findCandidates();
  }

  handleFindCandidatesButtonClick() {
    this.findCandidates();
  }

  handleChangePageButtonClick(pageNumber: number) {
    this.setCandidatesPageNumber(pageNumber);
    this.findCandidates();
  }

  findCandidates() {
    let candidatesPage: CandidatePage;
    this.candidates = null;

    this.candidatesService.findCandidates(this.pageNumber, this.pageSize)
      .subscribe(
        candidates => {
          this.findCandidatesErrorOccurred = false;
          candidatesPage = <CandidatePage> candidates;
          this.setupCandidatesPageData(candidatesPage);
        },
        () => {
          this.findCandidatesErrorOccurred = true;
        }
      );
  }

  private setupCandidatesPageData(candidatesPage: CandidatePage) {
    this.candidates = candidatesPage.pageContent;
    this.totalPagesNumber = Array(candidatesPage.totalPagesNumber).fill(0).map((x, i) => i);
  }

  private setCandidatesPageSize(pageSize: number) {
    this.pageSize = pageSize;
    localStorage.setItem('candidatesPageSize', String(pageSize));
  }

  private setCandidatesPageNumber(pageNumber: number) {
    this.pageNumber = pageNumber;
    localStorage.setItem('candidatesPageNumber', String(pageNumber));
  }
}
