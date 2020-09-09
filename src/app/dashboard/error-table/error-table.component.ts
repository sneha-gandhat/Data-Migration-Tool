import { element } from 'protractor';
import { MonitorService } from './../../services/monitor.service';
import { data } from 'jquery';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Error } from './error';
import { MatSort } from '@angular/material/sort';
import { ErrorDetailsService } from 'src/app/services/error-details.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-error-table',
  templateUrl: './error-table.component.html',
  styleUrls: ['./error-table.component.css']
})
export class ErrorTableComponent implements OnInit, AfterViewInit {
  errorCategory: string;
  columnsToDisplay = ['type', 'name', 'revision', 'filename', 'error', 'reprocessFailure'];
  errorList: Error[] = [];
  tempErrorList: any = [];
  errorListDataSource: any;
  errObj = new Error("", "", "", "", "", "", "");


  //Send Error Data Source to Parent Component (ErrorPreviewDialogbodyComponent)
  @Output()
  sendErrorDataSource = new EventEmitter<any>();

  constructor(private errordetailsService: ErrorDetailsService, private monitorservice: MonitorService) {
    //Get Error Category sent from component (TransformDashboardComponent/LoadDashboardComponent)
    this.errordetailsService.invokeEvent.subscribe(value => {
      this.errorCategory = value;
    });
  }

  ngOnInit(): void {
    //Emit the ErrorListDataSource to Parent Component (ErrorPreviewDialogbodyComponent)
    this.sendErrorDataSource.emit(this.errorListDataSource);
    
    if ("transformError" == this.errorCategory) {
      //Load All failed transform object Details
      this.getAllFailedTransformObjectDetails();
    }
    else if ("loadError" == this.errorCategory) {
      //Load All failed load object Details
      this.getAllFailedLoadObjectDetails();
    }

  }

  //Pagination & Sorting
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(): void {
  }

  //Render all failed transform object Details
  getAllFailedTransformObjectDetails() {
    this.monitorservice.getTransformFailedObjectDetails().subscribe(
      data => {
        this.tempErrorList = data;
        this.tempErrorList.forEach(element => {
          this.errObj = element;
          let type = this.errObj.type;
          let name = this.errObj.name;
          let rev = this.errObj.revision;
          let file = this.errObj.filename;
          let err = this.errObj.transError;
          this.errorList.push(new Error(type, name, rev, file, err, "", ""));
        });
        this.errorListDataSource = new MatTableDataSource(this.errorList);
        this.errorListDataSource.paginator = this.paginator;
        this.errorListDataSource.sort = this.sort;
      },
      () => {
        alert("Problem in getting failed transform object data!!");
      }
    );
  }

  //Render all failed load object Details
  getAllFailedLoadObjectDetails() {
    this.monitorservice.getLoadFailedObjectDetails().subscribe(
      data => {
        this.tempErrorList = data;
        this.tempErrorList.forEach(element => {
          this.errObj = element;
          let type = this.errObj.type;
          let name = this.errObj.name;
          let rev = this.errObj.revision;
          let file = this.errObj.filename;
          let err = this.errObj.loadError;
          this.errorList.push(new Error(type, name, rev, file, err, "", ""));
        });
        this.errorListDataSource = new MatTableDataSource(this.errorList);
        this.errorListDataSource.paginator = this.paginator;
        this.errorListDataSource.sort = this.sort;
      },
      () => {
        alert("Problem in getting failed load object data!!");
      }
    );
  }

  //Reprocess the failed object
  reProcess() {

  }
}
