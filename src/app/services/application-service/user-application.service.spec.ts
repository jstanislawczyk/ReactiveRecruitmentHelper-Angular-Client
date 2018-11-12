import { TestBed } from '@angular/core/testing';

import { UserApplicationService } from './user-application.service';

describe('UserApplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserApplicationService = TestBed.get(UserApplicationService);
    expect(service).toBeTruthy();
  });
});
