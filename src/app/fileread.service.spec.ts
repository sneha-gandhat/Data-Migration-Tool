import { TestBed } from '@angular/core/testing';

import { FilereadService } from './fileread.service';

describe('FilereadService', () => {
  let service: FilereadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilereadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
