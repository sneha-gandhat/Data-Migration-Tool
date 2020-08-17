import { ModifymappingDialogbodyComponent } from './../modifymapping-dialogbody/modifymapping-dialogbody.component';
import { DatamappingComponent } from './../datamapping/datamapping.component';
import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Mapping } from './mapping';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-mapping-preview',
  templateUrl: './mapping-preview.component.html',
  styleUrls: ['./mapping-preview.component.css'],
  entryComponents: [ModifymappingDialogbodyComponent],  //to open the component in Dialog
})
export class MappingPreviewComponent implements OnInit, AfterViewInit {
  columnsToDisplay = ['adminType', 'srcValue', 'dstValue', 'action'];
  dataMappingListDataSource: any;
  dataMappingList: Array<Mapping>;

  constructor(private router: Router, private dialog: MatDialog) {
    this.dataMappingList = new Array<Mapping>();
    this.dataMappingList.push(new Mapping('Type', 'products', 'Part'));
    this.dataMappingList.push(new Mapping('Attribute', 'product_id', 'Part Id'));
    this.dataMappingList.push(new Mapping('Policy', 'product policy', 'EC Part'));
    this.dataMappingList.push(new Mapping('Attribute', 'product_name', 'Part Name'));
    this.dataMappingList.push(new Mapping('Type', 'products', 'Part'));
    this.dataMappingList.push(new Mapping('Attribute', 'model_year', 'Modified Date'));
    this.dataMappingList.push(new Mapping('Type', 'products', 'Part'));
    this.dataMappingList.push(new Mapping('Attribute', 'product_id', 'Part Id'));
    this.dataMappingList.push(new Mapping('Policy', 'product policy', 'EC Part'));
    this.dataMappingList.push(new Mapping('Attribute', 'product_name', 'Part Name'));
    this.dataMappingList.push(new Mapping('Type', 'products', 'Part'));
    this.dataMappingList.push(new Mapping('Attribute', 'model_year', 'Modified Date'));
    this.dataMappingListDataSource = new MatTableDataSource(this.dataMappingList);
  }

  ngOnInit(): void {
  }

  //Pagination & Sorting
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(): void {
    this.dataMappingListDataSource.paginator = this.paginator;
    this.dataMappingListDataSource.sort = this.sort;
  }

  //Search Filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataMappingListDataSource.filter = filterValue;
  }

  //Navigate to Data Mapping
  loadMappingPage() {
    this.router.navigate(['gotoDataMapping']);
  }

  //Open Dialog to modify the Data Mapping
  openModifyMappingDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(ModifymappingDialogbodyComponent, dialogConfig);
  }
  
  // Delete Mapping form table as well as from DB
  deleteMapping() {

  }

}
