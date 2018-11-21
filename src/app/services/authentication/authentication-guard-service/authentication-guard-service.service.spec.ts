import { TestBed } from '@angular/core/testing';

import { AuthenticationGuardServiceService } from './authentication-guard-service.service';

describe('AuthenticationGuardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationGuardServiceService = TestBed.get(AuthenticationGuardServiceService);
    expect(service).toBeTruthy();
  });
});
