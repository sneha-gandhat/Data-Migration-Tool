import { FailedObjectInfoService } from './../../services/failed-object-info.service';
import { element } from 'protractor';
import { MonitorService } from './../../services/monitor.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Error } from './error';
import { MatSort } from '@angular/material/sort';
import { ErrorDetailsService } from 'src/app/services/error-details.service';
import { MatPaginator } from '@angular/material/paginator';
import swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReprocessDialogbodyComponent } from '../reprocess-dialogbody/reprocess-dialogbody.component';

@Component({
  selector: 'app-error-table',
  templateUrl: './error-table.component.html',
  styleUrls: ['./error-table.component.css'],
  entryComponents: [ReprocessDialogbodyComponent],
})
export class ErrorTableComponent implements OnInit, AfterViewInit {
  errorCategory: string;
  columnsToDisplay = ['type', 'name', 'revision', 'filename', 'error', 'reprocessFailure'];
  errorList: Error[] = [];
  tempErrorList: any = [];
  errorListDataSource: any;
  errObj = new Error("", "", "", "", "", "", "");

  constructor(private dialog: MatDialog, private errordetailsService: ErrorDetailsService, private monitorservice: MonitorService, private failedobjectinfoservice: FailedObjectInfoService) {
    //Get Error Category sent from component (TransformDashboardComponent/LoadDashboardComponent)
    this.errordetailsService.invokeEvent.subscribe(value => {
      this.errorCategory = value;
    });
  }

  ngOnInit(): void {
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

  //Search Filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.errorListDataSource.filter = filterValue;
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
        swal.fire({
          title: 'Oops...',
          text: "Problem in getting failed transform object data",
          icon: 'error',
          confirmButtonColor: "#4b4276"
        });
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
        swal.fire({
          title: 'Oops...',
          text: "Problem in getting failed load object data",
          icon: 'error',
          confirmButtonColor: "#4b4276"
        });
      }
    );
  }

  //Reprocess the failed object
  reProcess(element: Error) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    this.dialog.open(ReprocessDialogbodyComponent, dialogConfig);
    //Send the current object to ReprocessDialogbodyComponent
    this.failedobjectinfoservice.invokeEvent.next(element);
  }
}
