import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SegregatorPreviewComponent } from '../segregator-preview/segregator-preview.component';

@Component({
  selector: 'app-is-mandatory-dialog',
  templateUrl: './is-mandatory-dialog.component.html',
  styleUrls: ['./is-mandatory-dialog.component.css']
})
export class IsMandatoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SegregatorPreviewComponent>) { }

  ngOnInit(): void {
  }
  
  close() {
    this.dialogRef.close("Close the window");
  }

  deleteTag(){
    this.dialogRef.close("Close the window");
    //move the tag from types[right] to tags [left] again.function in segregator ts  component 
  }
  ok() {
    this.dialogRef.close("Close the window");
    //change the style for the selected tag to notify is it made mandatory.  
  }

}
