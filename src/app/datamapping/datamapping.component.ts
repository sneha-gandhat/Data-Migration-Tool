import { Mapping } from './../mapping-preview/mapping';
import { TargetvalueChooserDialogbodyComponent } from './../targetvalue-chooser-dialogbody/targetvalue-chooser-dialogbody.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SelectValueService } from '../services/select-value.service';
import { TransformService } from '../services/transform.service';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { GetMappingIdService } from '../services/get-mapping-id.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-datamapping',
  templateUrl: './datamapping.component.html',
  styleUrls: ['./datamapping.component.css'],
  entryComponents: [TargetvalueChooserDialogbodyComponent],//to open the chooser component in Dialog
})
export class DatamappingComponent implements OnInit, AfterViewInit {
  selectedAdminValue: string = " ";
  selectedSourceValue: string;
  selectedTargetValue: string;
  mapping = new Mapping(0, "", "", "");
  mappingId: number;
  message: any;
  @Input()
  isParent: boolean;
  @ViewChild('matSelect') matSelect: MatSelect;

  // Temporary list of values passed
  adminTypeList = ['Type', 'Name', 'Revision', 'Owner', 'Attribute', 'Policy', 'Relationship'];
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
      this.selectedAdminValue = value;
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
    this.transformservice.addMappingRule(modifiedMapping).subscribe(data => {
      swal.fire({
        text: "Mapping successfully added",
        timer: 1000,
        icon: 'success',
        showConfirmButton: false,
      });
      this.selectedAdminValue = " ";
      this.selectedSourceValue = " ";
      this.selectedTargetValue = " ";
    }, err => {
      swal.fire({
        title: 'Oops...',
        text: "Problem in adding Mapping into Database",
        icon: 'error',
        confirmButtonColor: "#4b4276"
      });
    });
  }

  // Modify Mapping and save into DB
  modifyMapping() {
    const modifiedMapping = new Mapping(this.mappingId, this.selectedAdminValue, this.selectedSourceValue, this.selectedTargetValue);
    this.transformservice.updateMapping(this.mappingId, modifiedMapping)
      .subscribe(data => {
        swal.fire({
          text: "Mapping successfully modified",
          timer: 1000,
          icon: 'success',
          showConfirmButton: false,
        });
        //Calling method getAllMappingDetails() - from MappingPreviewComponent
        this.mappingIdService.callMethodOfMappingPreviewComponent();
        //Call closeDialog() method of ModifymappingDialogbodyComponent
        this.mappingIdService.callMethodOfModifymappingDialogbodyComponent();
      },
        err => {
          swal.fire({
            title: 'Oops...',
            text: "Problem in modifying Mapping data",
            icon: 'error',
            confirmButtonColor: "#4b4276"
          });
        }
      );
  }

  //Open Dialog to choose Source value
  openValueChooserSource() {
    if (this.selectedAdminValue == " " || this.selectedAdminValue == undefined) {
      swal.fire({
        text: "Please select Admin Type",
        timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
      });
    } else {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = false;
      this.dialog.open(TargetvalueChooserDialogbodyComponent, dialogConfig);
      //Send Source value List
      this.selectvalueService.invokeEvent.next(this.srcValueList);
      this.selectvalueService.isSource = true;
    }
  }

  //Open Dialog to choose Target value
  openValueChooserTarget() {
    if (this.selectedAdminValue == " " || this.selectedAdminValue == undefined) {
      swal.fire({
        text: "Please select Admin Type",
        timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
      });
    } else {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = false;
      this.dialog.open(TargetvalueChooserDialogbodyComponent, dialogConfig);
      //Send Target value List
      this.selectvalueService.invokeEvent.next(this.dstValueList);
      this.selectvalueService.isSource = false;
    }
  }

  getSourceValues() {
    this.transformservice.getSourceValue(this.selectedAdminValue).subscribe(
      data => {
        this.srcValueList = data;
      },
      err => {
        swal.fire({
          title: 'Oops...',
          text: "Problem in getting Source Value data",
          icon: 'error',
          confirmButtonColor: "#4b4276"
        });
      }
    );
  }

  getTagetValues() {
    this.transformservice.getTargetValue(this.selectedAdminValue).subscribe(
      data => {
        this.dstValueList = data;
      },
      err => {
        swal.fire({
          title: 'Oops...',
          text: "Problem in getting Target Value data",
          icon: 'error',
          confirmButtonColor: "#4b4276"
        });
      }
    );
  }

  //Cancel value selection for Mapping and close the window
  cancel() {
    this.dialog.closeAll();
  }

}
