import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprocessDialogbodyComponent } from './reprocess-dialogbody.component';

describe('ReprocessDialogbodyComponent', () => {
  let component: ReprocessDialogbodyComponent;
  let fixture: ComponentFixture<ReprocessDialogbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprocessDialogbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprocessDialogbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
