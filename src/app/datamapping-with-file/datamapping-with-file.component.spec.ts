import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamappingWithFileComponent } from './datamapping-with-file.component';

describe('DatamappingWithFileComponent', () => {
  let component: DatamappingWithFileComponent;
  let fixture: ComponentFixture<DatamappingWithFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamappingWithFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamappingWithFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
