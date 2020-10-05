import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUniquetagsMappingDialogbodyComponent } from './modify-uniquetags-mapping-dialogbody.component';

describe('ModifyUniquetagsMappingDialogbodyComponent', () => {
  let component: ModifyUniquetagsMappingDialogbodyComponent;
  let fixture: ComponentFixture<ModifyUniquetagsMappingDialogbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyUniquetagsMappingDialogbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyUniquetagsMappingDialogbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
