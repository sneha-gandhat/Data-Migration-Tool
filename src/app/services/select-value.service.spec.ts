import { TestBed } from '@angular/core/testing';
import { SelectValueService } from './select-value.service';


describe('SelectValueService', () => {
  let service: SelectValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
