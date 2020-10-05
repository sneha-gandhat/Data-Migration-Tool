import { ModifyUniquetagsMappingDialogbodyComponent } from './../modify-uniquetags-mapping-dialogbody/modify-uniquetags-mapping-dialogbody.component';
import { UniqueTags } from './uniquetags';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import swal from 'sweetalert2';
import { GetMappingIdService } from '../services/get-mapping-id.service';

@Component({
  selector: 'app-segregator-preview',
  templateUrl: './segregator-preview.component.html',
  styleUrls: ['./segregator-preview.component.css'],
  entryComponents: [ModifyUniquetagsMappingDialogbodyComponent],  //to open the component in Dialog

})
export class SegregatorPreviewComponent implements OnInit, AfterViewInit {
  columnsToDisplay = ['fileName', 'tagName', 'adminType', 'action'];
  uniqueTagListDataSource: any;
  uniqueTagList: UniqueTags[] = [];

  constructor(public dialogRef: MatDialogRef<SegregatorPreviewComponent>, private dialog: MatDialog, private mappingIdService: GetMappingIdService) {
    this.uniqueTagList.push(new UniqueTags(1, "abc.xml", "Product", "Type"));
    this.uniqueTagList.push(new UniqueTags(2, "pqr.xml", "Bike", "Attribute"));
    this.uniqueTagList.push(new UniqueTags(11, "abc.xml", "Date", "Policy"));
    this.uniqueTagList.push(new UniqueTags(3, "aaa.xml", "Brand", "Attribute"));
    this.uniqueTagList.push(new UniqueTags(4, "bbb.xml", "Id", "Policy"));
    this.uniqueTagList.push(new UniqueTags(5, "ccc.xml", "Year", "Type"));
    this.uniqueTagList.push(new UniqueTags(31, "abc.xml", "Product", "Type"));
    this.uniqueTagList.push(new UniqueTags(6, "pqr.xml", "Bike", "Attribute"));
    this.uniqueTagList.push(new UniqueTags(1, "abc.xml", "Date", "Policy"));
    this.uniqueTagList.push(new UniqueTags(7, "aaa.xml", "Brand", "Attribute"));
    this.uniqueTagList.push(new UniqueTags(8, "bbb.xml", "Id", "Policy"));
    this.uniqueTagList.push(new UniqueTags(9, "ccc.xml", "Year", "Type"));
    this.uniqueTagListDataSource = new MatTableDataSource(this.uniqueTagList);
  }

  ngOnInit(): void {
  }

  //Pagination & Sorting
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(): void {
    this.uniqueTagListDataSource.paginator = this.paginator;
    this.uniqueTagListDataSource.sort = this.sort;
  }

  //Search Filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.uniqueTagListDataSource.filter = filterValue;
  }

  //Open Dialog to modify the Unique tags Mapping
  openModifyUniqueTagsDialog(uniqueTags: UniqueTags) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(ModifyUniquetagsMappingDialogbodyComponent, dialogConfig);
    //Send Mapping
    this.mappingIdService.invokeEvent.next(uniqueTags);
  }

  // Delete Unique Tag Mapping form table as well as from DB
  deleteUniqueTag(id: number) {
    swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this mapping?",
      showCancelButton: true,
      confirmButtonColor: '#4b4276',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      imageUrl: "/assets/images/del.gif",
      imageWidth: 100,
      imageHeight: 100,
    }).then((result) => {
      if (result.isConfirmed) {
        //Add logic here
        swal.fire({
          title: 'Deleted!',
          text: 'Mapping has been deleted.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
  }

  //Close the Segregation Preview window
  close() {
    this.dialogRef.close("Close the window");
  }
}
