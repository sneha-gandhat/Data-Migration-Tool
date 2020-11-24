import { Files } from './Files';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-data-cleaning',
  templateUrl: './data-cleaning.component.html',
  styleUrls: ['./data-cleaning.component.css']
})
export class DataCleaningComponent implements OnInit {

  columnsToDisplay = ['select', 'fileName', 'Location'];
  fileList: File[] = [];
  PartialLoadFileListDataSource: any;
  PartialLoadFileList: Array<Files> = [];
  selectedFiles: Array<string> = [];
 


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selection = new SelectionModel<Files>(true, []);
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
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.PartialLoadFileListDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.PartialLoadFileListDataSource.data.forEach(row => this.selection.select(row));
  }
  loadMappingReport() {
    this.router.navigate(['MappingReport']);
  }
  proceedToTransform() {
    this.router.navigate(['gotoTransformationProgressBar']);
  }


}
