import { Component, OnInit, Input } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ErrorPreviewDialogbodyComponent } from '../error-preview-dialogbody/error-preview-dialogbody.component';
import { ErrorDetailsService } from 'src/app/services/error-details.service';

@Component({
  selector: 'app-load-dashboard',
  templateUrl: './load-dashboard.component.html',
  styleUrls: ['./load-dashboard.component.css'],
  entryComponents: [ErrorPreviewDialogbodyComponent],//to open the Error Preview component in Dialog
})
export class LoadDashboardComponent implements OnInit {
  @Input()
  errorCategory: string;
  isEnableButton: boolean = true;

  constructor(private dialog: MatDialog, private errordetailsService: ErrorDetailsService) { }

  ngOnInit(): void {
  }

  isEnable(value: boolean) {
    this.isEnableButton = value;
  }
  
  //Open Dialog to view Error Preview
  loadErrorPreview() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    this.dialog.open(ErrorPreviewDialogbodyComponent, dialogConfig);
    //Send Error Category received from child component (LoadDrilldownComponent -> ErrorTableComponent)
    this.errordetailsService.invokeEvent.next(this.errorCategory);
  }
}
