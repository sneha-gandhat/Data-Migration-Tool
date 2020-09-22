import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FileerrorPreviewDialogbodyComponent } from '../fileerror-preview-dialogbody/fileerror-preview-dialogbody.component';

@Component({
  selector: 'app-upload-dashboard',
  templateUrl: './upload-dashboard.component.html',
  styleUrls: ['./upload-dashboard.component.css'],
  entryComponents: [FileerrorPreviewDialogbodyComponent],//to open the File Error Preview component in Dialog
})
export class UploadDashboardComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  //Open Dialog to view Error Preview
  loadErrorPreview() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    this.dialog.open(FileerrorPreviewDialogbodyComponent, dialogConfig);
  }

}
