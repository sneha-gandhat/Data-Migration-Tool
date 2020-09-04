import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { LoadFileList } from './LoadFileList';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-load-select-files',
  templateUrl: './load-select-files.component.html',
  styleUrls: ['./load-select-files.component.css']
})
export class LoadSelectFilesComponent implements OnInit {

  columnsToDisplay = ['FileName', 'FileType'];
  PartialLoadFileListDataSource: any;
  PartialLoadFileList: Array<LoadFileList>;

  constructor(private router:Router) {
    this.PartialLoadFileList = new Array<LoadFileList>();
    this.PartialLoadFileList.push(new LoadFileList('Products.xml', 'Product'));
    this.PartialLoadFileList.push(new LoadFileList('Attribute.xml', 'Attribute'));
    this.PartialLoadFileList.push(new LoadFileList('Policy.xml', 'Product Policy'));
    this.PartialLoadFileList.push(new LoadFileList('Relationship.xml', 'Relationship'));
    this.PartialLoadFileList.push(new LoadFileList('State.xml', 'State'));
    this.PartialLoadFileList.push(new LoadFileList('Owner.xml', 'Owner'));
    this.PartialLoadFileListDataSource = new MatTableDataSource(this.PartialLoadFileList);

   }

  ngOnInit(): void {
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(): void {
    this.PartialLoadFileListDataSource.paginator = this.paginator;
    this.PartialLoadFileListDataSource.sort = this.sort;
  }
   //Search Filter
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.PartialLoadFileListDataSource.filter = filterValue;
  }
  //Back
  loadLanding() {
    this.router.navigate(['load-landing']);
  }
  //Front
  loadStatus() {
    this.router.navigate(['load-status']);
  }
}
