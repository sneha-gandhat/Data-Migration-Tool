import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformProgressbarComponent } from './transform-progressbar.component';

describe('TransformProgressbarComponent', () => {
  let component: TransformProgressbarComponent;
  let fixture: ComponentFixture<TransformProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
