import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegregatorComponent } from './segregator.component';

describe('SegregatorComponent', () => {
  let component: SegregatorComponent;
  let fixture: ComponentFixture<SegregatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegregatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegregatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
