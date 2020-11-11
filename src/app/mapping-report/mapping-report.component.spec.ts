import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingReportComponent } from './mapping-report.component';

describe('MappingReportComponent', () => {
  let component: MappingReportComponent;
  let fixture: ComponentFixture<MappingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
