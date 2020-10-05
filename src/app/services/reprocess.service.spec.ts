import { TestBed } from '@angular/core/testing';

import { ReprocessService } from './reprocess.service';

describe('ReprocessService', () => {
  let service: ReprocessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReprocessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
