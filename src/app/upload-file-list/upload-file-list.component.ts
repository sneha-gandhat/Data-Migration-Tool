import { File } from './file';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

const filelist: File[] = [
  new File("ETL", "2020-01-16", ".ppt", 305, ""),
  new File("Upload", "2020-02-21", ".ppt", 500, ""),
  new File("Tranform", "2020-01-16", ".xml", 100, ""),
  new File("Load", "2020-03-26", ".ppt", 100, ""),
  new File("Load", "2020-03-26", ".ppt", 100, ""),
  new File("Search", "2020-01-16", ".ppt", 250, ""),
  new File("Sort", "2020-07-12", ".xml", 100, ""),
  new File("App", "2020-01-16", ".ppt", 100, ""),
  new File("Filter", "2020-01-16", ".ppt", 700, ""),
  new File("Route", "2020-03-26", ".xml", 100, ""),
  new File("Pipe", "2020-01-16", ".ppt", 100, ""),
  new File("Search", "2020-01-16", ".ppt", 250, ""),
  new File("Sort", "2020-07-12", ".xml", 100, ""),
  new File("App", "2020-01-16", ".ppt", 100, ""),
  new File("Filter", "2020-01-16", ".ppt", 700, ""),
  new File("Route", "2020-03-26", ".xml", 100, ""),
  new File("Pipe", "2020-01-16", ".ppt", 100, ""),
  new File("ETL", "2020-01-16", ".ppt", 305, ""),
  new File("Upload", "2020-02-21", ".ppt", 500, ""),
  new File("Tranform", "2020-01-16", ".xml", 100, ""),
];

@Component({
  selector: 'app-upload-file-list',
  templateUrl: './upload-file-list.component.html',
  styleUrls: ['./upload-file-list.component.css']
})

export class UploadFileListComponent implements OnInit, AfterViewInit {
  columnsToDisplay = ['fileName', 'uploadedDate', 'fileType', 'fileSize', 'fileAction'];
  filelistdataSource = new MatTableDataSource(filelist);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

  }
  ngAfterViewInit(): void {
    this.filelistdataSource.paginator = this.paginator;
    this.filelistdataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

  //Search Filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.filelistdataSource.filter = filterValue;

  }
  deleteFile() {

  }
  downloadFile() {

  }
}
