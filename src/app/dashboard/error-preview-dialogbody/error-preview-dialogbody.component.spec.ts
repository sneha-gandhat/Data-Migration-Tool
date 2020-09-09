import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPreviewDialogbodyComponent } from './error-preview-dialogbody.component';

describe('ErrorPreviewDialogbodyComponent', () => {
  let component: ErrorPreviewDialogbodyComponent;
  let fixture: ComponentFixture<ErrorPreviewDialogbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPreviewDialogbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPreviewDialogbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
