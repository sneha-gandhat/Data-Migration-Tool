import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Error } from './error';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-error-table',
  templateUrl: './error-table.component.html',
  styleUrls: ['./error-table.component.css']
})
export class ErrorTableComponent implements OnInit, AfterViewInit {
  columnsToDisplay = ['type', 'name', 'revision', 'fileName', 'error', 'reprocessFailure'];
  errorListDataSource: any;
  errorList: Error[] = [];
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.errorList.push(new Error('Part', '900001', 'A', 'Part.xml', 'Internal Server Error'));
    this.errorList.push(new Error('DD', '900003', 'B', 'DD.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Proc', '900005', 'C', 'Proc.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Tool', '900007', 'B', 'Tool.xml', 'Internal Server Error'));
    this.errorList.push(new Error('Nut', '900004', 'A', 'Nut.xml', 'Internal Server Error'));
    this.errorListDataSource = new MatTableDataSource(this.errorList);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.errorListDataSource.sort = this.sort;
  }

  //Reprocess the failed object
  reProcess() {

  }
}
