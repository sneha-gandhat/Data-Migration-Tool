import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-filelist-preview-dialogbody',
  templateUrl: './upload-filelist-preview-dialogbody.component.html',
  styleUrls: ['./upload-filelist-preview-dialogbody.component.css']
})
export class UploadFilelistPreviewDialogbodyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadFilelistPreviewDialogbodyComponent>) { }

  ngOnInit(): void {
  }

  //Close the Error Preview window
  close() {
    this.dialogRef.close("Close the window");
  }
}
