import { Technology } from './Technology';

class Candidate {
  get _id(): string {
    return this.__id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get jobPosition(): string {
    return this._jobPosition;
  }

  get experienceYearsInJobPosition(): number {
    return this._experienceYearsInJobPosition;
  }

  get candidateMessage(): string {
    return this._candidateMessage;
  }

  get cvFilePath(): string {
    return this._cvFilePath;
  }

  get applicationDate(): string {
    return this._applicationDate;
  }

  get technologies(): Array<Technology> {
    return this._technologies;
  }

  private readonly __id: string;
  private readonly _firstName: string;
  private readonly _lastName: string;
  private readonly _jobPosition: string;
  private readonly _experienceYearsInJobPosition: number;
  private readonly _candidateMessage: string;
  private readonly _cvFilePath: string;
  private readonly _applicationDate: string;
  private readonly _technologies: Array<Technology> = [];

  constructor(
    id: string, firstName: string, lastName: string, jobPosition: string, experienceYearsInJobPosition: number, candidateMessage: string,
    cvFilePath: string, applicationDate: string, technologies: Array<Technology>
  ) {
    this.__id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._jobPosition = jobPosition;
    this._experienceYearsInJobPosition = experienceYearsInJobPosition;
    this._cvFilePath = cvFilePath;
    this._applicationDate = applicationDate;
    this._technologies = technologies;
  }
}

export { Candidate };
