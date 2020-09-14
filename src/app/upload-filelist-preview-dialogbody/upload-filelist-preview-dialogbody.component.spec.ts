import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilelistPreviewDialogbodyComponent } from './upload-filelist-preview-dialogbody.component';

describe('UploadFilelistPreviewDialogbodyComponent', () => {
  let component: UploadFilelistPreviewDialogbodyComponent;
  let fixture: ComponentFixture<UploadFilelistPreviewDialogbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFilelistPreviewDialogbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilelistPreviewDialogbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
