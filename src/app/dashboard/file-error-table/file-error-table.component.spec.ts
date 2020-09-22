import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileErrorTableComponent } from './file-error-table.component';

describe('FileErrorTableComponent', () => {
  let component: FileErrorTableComponent;
  let fixture: ComponentFixture<FileErrorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileErrorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileErrorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
