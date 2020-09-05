import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationStatusGaugeComponent } from './migration-status-gauge.component';

describe('MigrationStatusGaugeComponent', () => {
  let component: MigrationStatusGaugeComponent;
  let fixture: ComponentFixture<MigrationStatusGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrationStatusGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationStatusGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
