import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingPreviewComponent } from './mapping-preview.component';

describe('MappingPreviewComponent', () => {
  let component: MappingPreviewComponent;
  let fixture: ComponentFixture<MappingPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
