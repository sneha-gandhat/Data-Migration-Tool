import { TestBed } from '@angular/core/testing';

import { FailedObjectInfoService } from './failed-object-info.service';

describe('FailedObjectInfoService', () => {
  let service: FailedObjectInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FailedObjectInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
