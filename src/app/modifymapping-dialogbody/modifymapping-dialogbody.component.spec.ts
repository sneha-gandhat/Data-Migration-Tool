import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifymappingDialogbodyComponent } from './modifymapping-dialogbody.component';

describe('ModifymappingDialogbodyComponent', () => {
  let component: ModifymappingDialogbodyComponent;
  let fixture: ComponentFixture<ModifymappingDialogbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifymappingDialogbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifymappingDialogbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
