import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetvalueChooserDialogbodyComponent } from './targetvalue-chooser-dialogbody.component';

describe('TargetvalueChooserDialogbodyComponent', () => {
  let component: TargetvalueChooserDialogbodyComponent;
  let fixture: ComponentFixture<TargetvalueChooserDialogbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetvalueChooserDialogbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetvalueChooserDialogbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
