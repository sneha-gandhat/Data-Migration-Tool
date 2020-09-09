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
  columnsToDisplay = ['type', 'name', 'revision', 'fileName', 'error', 'reprocessFailure'];
  errorList: Error[] = [];
  errorListDataSource: any;

  //Send Error Data Source to Parent Component (ErrorPreviewDialogbodyComponent)
  @Output()
  sendErrorDataSource = new EventEmitter<any>();

  constructor(private errordetailsService: ErrorDetailsService) {
    //Get Error Category sent from component (TransformDashboardComponent/LoadDashboardComponent)
    this.errordetailsService.invokeEvent.subscribe(value => {
      this.errorCategory = value;
    });

    this.errorList.push(new Error('Part', '900001', 'A', 'Part.xml', 'Internal Server Error'));
    this.errorList.push(new Error('DD', '900003', 'B', 'DD.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Proc', '900005', 'C', 'Proc.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Tool', '900007', 'B', 'Tool.xml', 'Internal Server Error'));
    this.errorList.push(new Error('DD', '900003', 'B', 'DD.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Proc', '900005', 'C', 'Proc.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Tool', '900007', 'B', 'Tool.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Nut', '900004', 'A', 'Nut.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Part', '900001', 'A', 'Part.xml', 'Internal Server Error'));
    this.errorList.push(new Error('DD', '900003', 'B', 'DD.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Proc', '900005', 'C', 'Proc.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Tool', '900007', 'B', 'Tool.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Nut', '900004', 'A', 'Nut.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Part', '900001', 'A', 'Part.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Nut', '900004', 'A', 'Nut.xml', 'Internal Server Error'));
    this.errorListDataSource = new MatTableDataSource(this.errorList);
  }

  ngOnInit(): void {
    //Emit the ErrorListDataSource to Parent Component (ErrorPreviewDialogbodyComponent)
    this.sendErrorDataSource.emit(this.errorListDataSource);

  }

  //Pagination & Sorting
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(): void {
    this.errorListDataSource.sort = this.sort;
    this.errorListDataSource.paginator = this.paginator;
  }

  //Reprocess the failed object
  reProcess() {

  }
}
