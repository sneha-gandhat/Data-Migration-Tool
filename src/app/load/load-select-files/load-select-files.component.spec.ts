import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSelectFilesComponent } from './load-select-files.component';

describe('LoadSelectFilesComponent', () => {
  let component: LoadSelectFilesComponent;
  let fixture: ComponentFixture<LoadSelectFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadSelectFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSelectFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
