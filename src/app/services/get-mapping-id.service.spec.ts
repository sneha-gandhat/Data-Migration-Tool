import { TestBed } from '@angular/core/testing';

import { GetMappingIdService } from './get-mapping-id.service';

describe('GetMappingIdService', () => {
  let service: GetMappingIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMappingIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
