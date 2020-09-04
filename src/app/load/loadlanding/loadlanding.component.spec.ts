import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadlandingComponent } from './loadlanding.component';

describe('LoadlandingComponent', () => {
  let component: LoadlandingComponent;
  let fixture: ComponentFixture<LoadlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
