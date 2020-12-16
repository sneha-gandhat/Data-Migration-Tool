import { TestBed } from '@angular/core/testing';

import { UniqueTagPreviewService } from './unique-tag-preview.service';

describe('UniqueTagPreviewService', () => {
  let service: UniqueTagPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueTagPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
