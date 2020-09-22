import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileerrorPreviewDialogbodyComponent } from './fileerror-preview-dialogbody.component';

describe('FileerrorPreviewDialogbodyComponent', () => {
  let component: FileerrorPreviewDialogbodyComponent;
  let fixture: ComponentFixture<FileerrorPreviewDialogbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileerrorPreviewDialogbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileerrorPreviewDialogbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
