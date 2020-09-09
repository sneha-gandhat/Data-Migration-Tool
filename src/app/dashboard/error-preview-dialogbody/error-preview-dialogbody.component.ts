import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-preview-dialogbody',
  templateUrl: './error-preview-dialogbody.component.html',
  styleUrls: ['./error-preview-dialogbody.component.css']
})
export class ErrorPreviewDialogbodyComponent implements OnInit {

  //Get ErrorDataSource from child component (ErrorTableComponent)
  @Input()
  errorDataSource: any;

  constructor(public dialogRef: MatDialogRef<ErrorPreviewDialogbodyComponent>) {

  }

  //Set ErrorDataSource received from child component (ErrorTableComponent)
  setErrorDataSource($event: any) {
    this.errorDataSource = $event;
  }

  ngOnInit(): void {
  }

  //Search Filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.errorDataSource.filter = filterValue;
  }

  //Close the Error Preview window
  close() {
    this.dialogRef.close("Close the window");
  }
}
