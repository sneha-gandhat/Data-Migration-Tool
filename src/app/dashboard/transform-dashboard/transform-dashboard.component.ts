import { ErrorPreviewDialogbodyComponent } from './../error-preview-dialogbody/error-preview-dialogbody.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ErrorDetailsService } from 'src/app/services/error-details.service';

@Component({
  selector: 'app-transform-dashboard',
  templateUrl: './transform-dashboard.component.html',
  styleUrls: ['./transform-dashboard.component.css'],
  entryComponents: [ErrorPreviewDialogbodyComponent],//to open the Error Preview component in Dialog
})

export class TransformDashboardComponent implements OnInit {
  @Input()
  errorCategory: string;

  constructor(private dialog: MatDialog, private errordetailsService: ErrorDetailsService) { }

  ngOnInit(): void {

  }

  //Open Dialog to view Error Preview
  loadErrorPreview() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    this.dialog.open(ErrorPreviewDialogbodyComponent, dialogConfig);
    //Send Error Category received from parent component (MainDashboardComponent -> ErrorTableComponent)
    this.errordetailsService.invokeEvent.next(this.errorCategory);
  }
}
