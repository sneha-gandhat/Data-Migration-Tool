import { Mapping } from './../mapping-preview/mapping';
import { TargetvalueChooserDialogbodyComponent } from './../targetvalue-chooser-dialogbody/targetvalue-chooser-dialogbody.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SelectValueService } from '../services/select-value.service';
import { TransformService } from '../services/transform.service';
import { ViewChild, AfterViewInit } from '@angular/core';
import {MatSelectModule, MatSelect} from '@angular/material/select';																									  
import { GetMappingIdService } from '../services/get-mapping-id.service';

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
  mapping = new Mapping(0, "", "", "");
  mappingId: number;
  message:any;
  @Input()
  isParent: boolean;
@ViewChild('matSelect') matSelect: MatSelect;										   

  // Temporary list of values passed
  adminTypeList = ['Type', 'Attribute', 'Policy', 'Relationship'];
  srcValueList = [];
  dstValueList = [];

  constructor(private selectvalueService: SelectValueService, private transformservice: TransformService, private mappingIdService: GetMappingIdService, private dialog: MatDialog) {
    //Get Mapping
    this.mappingIdService.invokeEvent.subscribe(data => {
      this.mapping = data;
      //Set existing mapping values to modify mapping
      this.mappingId = this.mapping.id;
      this.selectedAdminValue = this.mapping.adminType;
      this.selectedSourceValue = this.mapping.sourceValue;
      this.selectedTargetValue = this.mapping.destinationValue;
    });
  }

ngAfterViewInit() {
				 
    this.matSelect.valueChange.subscribe(value => {
      this.selectedAdminValue=value;
      this.getSourceValues();
      this.getTagetValues();
															   
    });

  }
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
    const modifiedMapping = new Mapping(this.mappingId, this.selectedAdminValue, this.selectedSourceValue, this.selectedTargetValue);
    let resp=this.transformservice.addMappingRule(modifiedMapping);
    resp.subscribe((data)=>this.message=data)

  }
  // Modify Mapping and save into DB
  modifyMapping() {
    const modifiedMapping = new Mapping(this.mappingId, this.selectedAdminValue, this.selectedSourceValue, this.selectedTargetValue);
    this.transformservice.updateMapping(this.mappingId, modifiedMapping)
      .subscribe(data => {
        //Calling method getAllMappingDetails() - from MappingPreviewComponent
        this.mappingIdService.callMethodOfMappingPreviewComponent();
        //Call closeDialog() method of ModifymappingDialogbodyComponent
        this.mappingIdService.callMethodOfModifymappingDialogbodyComponent();
      },
        err => {
          alert("Problem in modifying Mapping data");
        }
      );
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
	 getSourceValues() {    
    this.transformservice.getSourceValue(this.selectedAdminValue).subscribe(
      data => {
        this.srcValueList = data;
      },
      err => {
        alert("Problem in getting Source Value data!!");
      }
    );
  }	
  
  getTagetValues() {    
    this.transformservice.getTargetValue(this.selectedAdminValue).subscribe(
      data => {
        this.dstValueList = data;
      },
      err => {
        alert("Problem in getting Target Value data!!");
      }
    );
  }

}
