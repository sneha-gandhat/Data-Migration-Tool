import { FileError } from './fileerror';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-file-error-table',
  templateUrl: './file-error-table.component.html',
  styleUrls: ['./file-error-table.component.css']
})
export class FileErrorTableComponent implements OnInit, AfterViewInit {
  columnsToDisplay = ['filename', 'size', 'objCount', 'error', 'reprocessFailure'];
  fileErrorList: FileError[] = [];
  fileErrorListDataSource: any;
  constructor() {
    this.fileErrorList.push(new FileError("product.xml", "98234", 910, "Internal server error"));
    this.fileErrorList.push(new FileError("abc.xml", "13234", 510, "Internal server error"));
    this.fileErrorList.push(new FileError("pqr.xml", "2334", 120, "Internal server error"));
    this.fileErrorList.push(new FileError("aaa.xml", "2634", 110, "Internal server error"));
    this.fileErrorList.push(new FileError("product.xml", "98234", 910, "Internal server error"));
    this.fileErrorList.push(new FileError("abc.xml", "13234", 510, "Internal server error"));
    this.fileErrorList.push(new FileError("pqr.xml", "2334", 120, "Internal server error"));
    this.fileErrorList.push(new FileError("aaa.xml", "2634", 110, "Internal server error"));
    this.fileErrorList.push(new FileError("aaa.xml", "2634", 110, "Internal server error"));
    this.fileErrorList.push(new FileError("product.xml", "98234", 910, "Internal server error"));
    this.fileErrorList.push(new FileError("abc.xml", "13234", 510, "Internal server error"));
    this.fileErrorList.push(new FileError("pqr.xml", "2334", 120, "Internal server error"));
    this.fileErrorList.push(new FileError("aaa.xml", "2634", 110, "Internal server error"));
    this.fileErrorListDataSource = new MatTableDataSource(this.fileErrorList);
  }
  
  ngOnInit(): void {
  }
  
  //Pagination & Sorting
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(): void {
    this.fileErrorListDataSource.paginator = this.paginator;
    this.fileErrorListDataSource.sort = this.sort;
  }

  //Search Filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.fileErrorListDataSource.filter = filterValue;
  }

  //Reprocess the failed object
  reProcess() {

  }
}
