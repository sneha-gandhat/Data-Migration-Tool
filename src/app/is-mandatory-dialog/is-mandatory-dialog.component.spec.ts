import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsMandatoryDialogComponent } from './is-mandatory-dialog.component';

describe('IsMandatoryDialogComponent', () => {
  let component: IsMandatoryDialogComponent;
  let fixture: ComponentFixture<IsMandatoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsMandatoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsMandatoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
