import { MatTableDataSource } from '@angular/material/table';
import { LoadStatusList } from './loadstatus';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-load-status',
  templateUrl: './load-status.component.html',
  styleUrls: ['./load-status.component.css']
})
export class LoadStatusComponent implements OnInit {
  columnsToDisplay = ['RelatedType', 'FileName','ProcessingStatus','ObjectsProcessed','LogFilePath'];
  LoadStatusDataSource: any;
  LoadStatusList: Array<LoadStatusList>;

  constructor(private router: Router) { 
    this.LoadStatusList=new Array <LoadStatusList>();
    this.LoadStatusList.push(new LoadStatusList('Product','LoacalHost:8080/FileServer/Products.xml','In Progress','298','localhost:8080//FileServer/Logs_LoadProducts.log'));
    this.LoadStatusList.push(new LoadStatusList('Product','LoacalHost:8080/FileServer/Products.xml','In Progress','298','localhost:8080//FileServer/Logs_LoadProducts.log'));
    this.LoadStatusList.push(new LoadStatusList('Product','LoacalHost:8080/FileServer/Products.xml','In Progress','298','localhost:8080//FileServer/Logs_LoadProducts.log'));
    this.LoadStatusList.push(new LoadStatusList('Product','LoacalHost:8080/FileServer/Products.xml','In Progress','298','localhost:8080//FileServer/Logs_LoadProducts.log'));
    this.LoadStatusList.push(new LoadStatusList('Product','LoacalHost:8080/FileServer/Products.xml','In Progress','298','localhost:8080//FileServer/Logs_LoadProducts.log'));
    this.LoadStatusList.push(new LoadStatusList('Product','LoacalHost:8080/FileServer/Products.xml','In Progress','298','localhost:8080//FileServer/Logs_LoadProducts.log'));
    this.LoadStatusList.push(new LoadStatusList('Product','LoacalHost:8080/FileServer/Products.xml','In Progress','298','localhost:8080//FileServer/Logs_LoadProducts.log'));
    this.LoadStatusDataSource=new MatTableDataSource(this.LoadStatusList);
  }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(): void {
    this.LoadStatusDataSource.paginator = this.paginator;
    this.LoadStatusDataSource.sort = this.sort;
  }
   //Search Filter
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.LoadStatusDataSource.filter = filterValue;
  }
  loadSelectFile() {
    this.router.navigate(['load-selectFiles']);
  }
  //Front
  moveToDashboard() {
    this.router.navigate(['dashboard']);
  }

}
