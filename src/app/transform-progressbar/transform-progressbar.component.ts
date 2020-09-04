import { MatTableDataSource } from '@angular/material/table';
import { FileList } from './PartialTransformFileList';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-transform-progressbar',
  templateUrl: './transform-progressbar.component.html',
  styleUrls: ['./transform-progressbar.component.css']
})


export class TransformProgressbarComponent implements OnInit {
   columnsToDisplay = ['FileType', 'FileName'];
  PartialTransformFileListDataSource: any;
  PartialTransformFileList: Array<FileList>;
  constructor(private router: Router) { 
    this.PartialTransformFileList = new Array<FileList>();
    this.PartialTransformFileList.push(new FileList('Products.xml', 'Product'));
    this.PartialTransformFileList.push(new FileList('Attribute.xml', 'Attribute'));
    this.PartialTransformFileList.push(new FileList('Policy.xml', 'Product Policy'));
    this.PartialTransformFileList.push(new FileList('Relationship.xml', 'Relationship'));
    this.PartialTransformFileList.push(new FileList('State.xml', 'State'));
    this.PartialTransformFileList.push(new FileList('Owner.xml', 'Owner'));
    this.PartialTransformFileListDataSource = new MatTableDataSource(this.PartialTransformFileList);
  }

  ngOnInit(): void {
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(): void {
    this.PartialTransformFileListDataSource.paginator = this.paginator;
    this.PartialTransformFileListDataSource.sort = this.sort;
  }
   //Search Filter
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.PartialTransformFileListDataSource.filter = filterValue;
  }
   //Navigate to Data Mapping Preview
   loadMappingPreview() {
    this.router.navigate(['gotoMappingPreview']);
  }

  openTranformProgressView() {
    this.router.navigate(['gotoTransformationProgressBar']);
  }
  

}
