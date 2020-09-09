import { TestBed } from '@angular/core/testing';

import { ErrorDetailsService } from './error-details.service';

describe('ErrorDetailsService', () => {
  let service: ErrorDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
