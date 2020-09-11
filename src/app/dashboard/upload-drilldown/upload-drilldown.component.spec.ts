import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDrilldownComponent } from './upload-drilldown.component';

describe('UploadDrilldownComponent', () => {
  let component: UploadDrilldownComponent;
  let fixture: ComponentFixture<UploadDrilldownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDrilldownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDrilldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
