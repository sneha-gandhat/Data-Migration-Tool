import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: 'app-modifymapping-dialogbody',
  templateUrl: './modifymapping-dialogbody.component.html',
  styleUrls: ['./modifymapping-dialogbody.component.css'],
})
export class ModifymappingDialogbodyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModifymappingDialogbodyComponent>) { }

  ngOnInit(): void {
  }

  //Close Data Mapping Dialog window
  closeDialog() {
    this.dialogRef.close("Modified Mapping Successfully");
  }

}
