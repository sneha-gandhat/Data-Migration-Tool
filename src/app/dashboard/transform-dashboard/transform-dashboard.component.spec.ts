import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformDashboardComponent } from './transform-dashboard.component';

describe('TransformDashboardComponent', () => {
  let component: TransformDashboardComponent;
  let fixture: ComponentFixture<TransformDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
