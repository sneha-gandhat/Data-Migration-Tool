import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegregatorPreviewComponent } from './segregator-preview.component';

describe('SegregatorPreviewComponent', () => {
  let component: SegregatorPreviewComponent;
  let fixture: ComponentFixture<SegregatorPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegregatorPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegregatorPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
