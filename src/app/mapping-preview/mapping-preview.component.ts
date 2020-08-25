import { GetMappingIdService } from './../services/get-mapping-id.service';
import { TransformService } from './../services/transform.service';
import { ModifymappingDialogbodyComponent } from './../modifymapping-dialogbody/modifymapping-dialogbody.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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
  columnsToDisplay = ['adminType', 'sourceValue', 'destinationValue', 'action'];
  dataMappingListDataSource: any;
  dataMappingList: Mapping[] = [];

  constructor(private transformservice: TransformService, private mappingIdService: GetMappingIdService, private router: Router, private dialog: MatDialog) {
    //Send getAllMappingDetails() method to DataMappingComponent
    this.mappingIdService.invokeEvent.subscribe(value => {
      if (value === 'loadMapping') {
        this.getAllMappingDetails();
      }
    });
  }

  ngOnInit(): void {
    //Load All Mapping Data
    this.getAllMappingDetails();
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
    this.dataMappingListDataSource.filter = filterValue;
  }

  //Navigate to Data Mapping
  loadMappingPage() {
    this.router.navigate(['gotoDataMapping']);
  }

  //Open Dialog to modify the Data Mapping
  openModifyMappingDialog(mapping: Mapping) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(ModifymappingDialogbodyComponent, dialogConfig);
    //Send Mapping
    this.mappingIdService.invokeEvent.next(mapping);
  }

  //Render all Mapping data in table
  getAllMappingDetails() {
    this.transformservice.getMappingDetails().subscribe(
      data => {
        this.dataMappingList = data;
        this.dataMappingListDataSource = new MatTableDataSource(this.dataMappingList);
        this.dataMappingListDataSource.paginator = this.paginator;
        this.dataMappingListDataSource.sort = this.sort;
      },
      () => {
        alert("Problem in getting Mapping data!!");
      }
    );
  }

  // Delete Mapping form table as well as from DB
  deleteMapping(id: number) {
    if (window.confirm('Are you sure want to delete this mapping ?')) {
      this.transformservice.deleteMapping(id).subscribe(
        () => {
          this.getAllMappingDetails();
        },
        () => { }
      );
    } else {
      console.log("EVENT CANCELLED!!");
    }
  }

}