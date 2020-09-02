import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformDrilldownComponent } from './transform-drilldown.component';

describe('TransformDrilldownComponent', () => {
  let component: TransformDrilldownComponent;
  let fixture: ComponentFixture<TransformDrilldownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformDrilldownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformDrilldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
