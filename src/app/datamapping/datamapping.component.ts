import { TargetvalueChooserDialogbodyComponent } from './../targetvalue-chooser-dialogbody/targetvalue-chooser-dialogbody.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SelectValueService } from '../services/select-value.service';

@Component({
  selector: 'app-datamapping',
  templateUrl: './datamapping.component.html',
  styleUrls: ['./datamapping.component.css'],
  entryComponents: [TargetvalueChooserDialogbodyComponent],//to open the chooser component in Dialog
})
export class DatamappingComponent implements OnInit {
  selectedAdminValue: string;
  selectedSourceValue: string;
  selectedTargetValue: string;

  @Input()
  isParent: boolean;

  // Temporary list of values passed
  adminTypeList = ['Type', 'Attribute', 'Policy', 'Relationship'];
  srcValueList = ['products', 'product_id', 'product_name', 'brand_id', 'category_id', 'product_name', 'brand_id', 'category_id', 'product_name', 'brand_id', 'category_id', 'products', 'product_id', 'product_name', 'products', 'product_id', 'products', 'product_id', 'product_name', 'products', 'product_id', 'products', 'product_id', 'product_name', 'products', 'product_id', 'product_name', 'brand_id', 'category_id', 'model_year', 'list_price', 'brand_id', 'category_id', 'model_year', 'list_price', 'model_year', 'list_price'];
  dstValueList = ['Part', 'Procedure', 'Design Document', 'Tools', 'Nut', 'Screw', 'Quality Procedure', 'Change Order', 'Change Order', 'Change Request', 'Change Action', 'Part', 'Procedure', 'Change Request', 'Change Action', 'Part', 'Procedure', 'Design Document', 'Quality Procedure', 'Design Document', 'Tools', 'Nut', 'Screw', 'Tools', 'Nut', 'Screw', 'Quality Procedure', 'Change Order', 'Change Request', 'Change Action', 'Part', 'Procedure', 'Design Document', 'Tools', 'Nut', 'Screw', 'Quality Procedure', 'Change Order', 'Change Request', 'Change Action', 'Part', 'Procedure', 'Design Document', 'Tools', 'Nut', 'Screw', 'Quality Procedure', 'Change Order', 'Change Request', 'Change Action', 'Part', 'Procedure', 'Design Document', 'Tools', 'Nut', 'Screw', 'Quality Procedure', 'Change Order', 'Change Request', 'Change Action', 'Part', 'Procedure', 'Design Document', 'Tools', 'Nut', 'Screw', 'Quality Procedure', 'Change Order', 'Change Request', 'Change Action', 'Part', 'Procedure', 'Design Document', 'Tools', 'Nut', 'Screw', 'Quality Procedure', 'Change Order', 'Change Request', 'Change Action'];

  constructor(private selectvalueService: SelectValueService, private dialog: MatDialog) { }

  ngOnInit() {
    //Get selected Value
    this.selectvalueService.getValue().subscribe(newValue => {
      if (this.selectvalueService.isSource) {
        this.selectedSourceValue = newValue;
      }
      else {
        this.selectedTargetValue = newValue;
      }
    });
  }

  // Add Mapping to DB
  addMapping() {

  }

  // Modify Mapping and save into DB
  modifyMapping() {

  }
  //Open Dialog to choose Source value
  openValueChooserSource() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    this.dialog.open(TargetvalueChooserDialogbodyComponent, dialogConfig);
    //Send Source value List
    this.selectvalueService.invokeEvent.next(this.srcValueList);
    this.selectvalueService.isSource = true;
  }

  //Open Dialog to choose Target value
  openValueChooserTarget() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    this.dialog.open(TargetvalueChooserDialogbodyComponent, dialogConfig);
    //Send Target value List
    this.selectvalueService.invokeEvent.next(this.dstValueList);
    this.selectvalueService.isSource = false;
  }

}
