import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-preview-dialogbody',
  templateUrl: './error-preview-dialogbody.component.html',
  styleUrls: ['./error-preview-dialogbody.component.css']
})
export class ErrorPreviewDialogbodyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ErrorPreviewDialogbodyComponent>) {

  }

  ngOnInit(): void {
  }

  //Close the Error Preview window
  close() {
    this.dialogRef.close("Close the window");
  }
}
