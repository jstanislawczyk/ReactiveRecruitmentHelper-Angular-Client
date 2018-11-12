import { TestBed } from '@angular/core/testing';

import { CookieBannerDisplayService } from './cookie-banner-display.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieBannerDisplayService = TestBed.get(CookieBannerDisplayService);
    expect(service).toBeTruthy();
  });
});
