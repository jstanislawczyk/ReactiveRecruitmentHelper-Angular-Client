import { Candidate } from './Candidate';

class CandidatePage {

    get pageContent(): Array<Candidate> {
        return this._pageContent;
    }

    get pageNumber(): number {
        return this._pageNumber;
    }

    get pageSize(): number {
        return this._pageSize;
    }

    get totalContentSize(): number {
        return this._totalContentSize;
    }

    get lastPage(): boolean {
        return this._lastPage;
    }

    get firstPage(): boolean {
        return this._firstPage;
    }

    get totalPagesNumber(): number {
        return this._totalPagesNumber;
    }

    private _pageContent: Array<Candidate>;
    private _pageNumber: number;
    private _pageSize: number;
    private _totalContentSize: number;
    private _lastPage: boolean;
    private _firstPage: boolean;
    private _totalPagesNumber: number;

    constructor(
        pageContent: Array<Candidate>,
        pageNumber: number,
        pageSize: number,
        totalContentSize: number,
        lastPage: boolean,
        firstPage: boolean,
        totalPagesNumber: number
    ) {
        this._pageContent = pageContent;
        this._pageNumber = pageNumber;
        this._pageSize = pageSize;
        this._totalContentSize = totalContentSize;
        this._lastPage = lastPage;
        this._firstPage = firstPage;
        this._totalPagesNumber = totalPagesNumber;
    }
}

export { CandidatePage };
