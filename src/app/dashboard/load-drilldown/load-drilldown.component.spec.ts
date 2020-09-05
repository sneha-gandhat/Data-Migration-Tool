import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDrilldownComponent } from './load-drilldown.component';

describe('LoadDrilldownComponent', () => {
  let component: LoadDrilldownComponent;
  let fixture: ComponentFixture<LoadDrilldownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDrilldownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDrilldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
