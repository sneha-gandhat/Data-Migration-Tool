import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fileerror-preview-dialogbody',
  templateUrl: './fileerror-preview-dialogbody.component.html',
  styleUrls: ['./fileerror-preview-dialogbody.component.css']
})
export class FileerrorPreviewDialogbodyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FileerrorPreviewDialogbodyComponent>) {}

  ngOnInit(): void {
  }

   //Close the Error Preview window
   close() {
    this.dialogRef.close("Close the window");
  }
}
