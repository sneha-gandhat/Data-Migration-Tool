import { Component, OnInit, ViewEncapsulation, Output } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { GetMappingIdService } from '../services/get-mapping-id.service';
@Component({
  selector: 'app-modifymapping-dialogbody',
  templateUrl: './modifymapping-dialogbody.component.html',
  styleUrls: ['./modifymapping-dialogbody.component.css'],
})
export class ModifymappingDialogbodyComponent implements OnInit {

  @Output()
  isParent: boolean = false;

  constructor(private mappingIdService: GetMappingIdService, public dialogRef: MatDialogRef<ModifymappingDialogbodyComponent>) {
    //Send closeDialog() method to DataMappingComponent
    this.mappingIdService.invokeEvent.subscribe(value => {
      if (value === 'closeWindow') {
        this.closeDialog();
      }
    });
  }

  ngOnInit(): void {
  }

  //Close Data Mapping Dialog window
  closeDialog() {
    this.dialogRef.close("Modified Mapping Successfully");
  }

}
