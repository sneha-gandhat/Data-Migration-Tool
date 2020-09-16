import { MatTableDataSource } from '@angular/material/table';
import { FileList } from './PartialTransformFileList';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FileUploadService } from '../services/file-upload.service';
import { File } from '../upload-file-list/file';
import { HttpClient } from '@angular/common/http';
import { TransformationResponse } from './TransformationResponse';
import { TransformService } from '../services/transform.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-transform-progressbar',
  templateUrl: './transform-progressbar.component.html',
  styleUrls: ['./transform-progressbar.component.css']
})


export class TransformProgressbarComponent implements OnInit {
  columnsToDisplay = ['select', 'fileName', 'fileType'];
  fileList: File[] = [];
  checkboxValue: boolean = false;
  PartialTransformFileListDataSource: any;
  PartialTransformFileList: Array<FileList> = [];
  selectedFiles: Array<string> = [];
  showInfo: boolean = false;
  responseArray: TransformationResponse;
  constructor(private router: Router, private fileService: FileUploadService, private httpClient: HttpClient, private transformService: TransformService) {
  }

  ngOnInit(): void {
    this.getAllFileDetails();
  }
  selection = new SelectionModel<FileList>(true, []);
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

  initiateLoad() {
    if (confirm("Are you sure, you are done with transform and want to proceed for load?")) {
      //Set session value for transform
      sessionStorage.setItem("transform", "true");
      this.router.navigate(['load-landing']);
    }
  }

  getAllFileDetails() {
    this.fileService.getUploadedFilesDeatils().subscribe(
      data => {
        this.fileList = data;
        console.log(this.fileList);
        this.getFileNames();
      },
      err => {
        alert("Problem in getting file data!!");
      }
    );
  }

  getFileNames() {
    let fileName: string;
    let objectType: string;
    this.fileList.forEach(
      obj => {
        fileName = obj.fileName;
        objectType = fileName.substring(0, fileName.lastIndexOf("."));
        this.PartialTransformFileList.push(new FileList(fileName, objectType));
      });
    this.PartialTransformFileListDataSource = new MatTableDataSource(this.PartialTransformFileList);
    this.PartialTransformFileListDataSource.paginator = this.paginator;
    this.PartialTransformFileListDataSource.sort = this.sort;
  }

  triggerTransformation() {
    console.log("File Size : " + this.selection.selected.length);
    if (this.selection.selected.length <= 0) {
      alert("Please select at least one file to proceed!!");
    } else {
      // alert("Showing Progress Bar!!");
      $("#progresswindow").css("display", "block");
      // this.showInfo=true;
      let component = this;
      console.log("Files selected: " + this.selection.selected.length);
      this.selection.selected.forEach(s => this.selectedFiles.push((s.fileName)));
      console.log("Files For Transformation" + this.selectedFiles);
      this.transformService.startTransformation(this.selectedFiles).subscribe(
        data => {
          component.responseArray = data;
          console.log(this.responseArray);
          component.showInfo = true;
          $("#progresswindow").css("display", "none");
          $("#checkFilesToBeTransformed").css("display", "none");
          $("#informationForm").css("display", "block");
        },
        error => {
          alert(error);
        }
      );

    }
  }

  //   maintainCheckedList(element,checked){

  //    alert("Called maintainCheckedList "+element.checked);
  //     if(!checked){
  //       this.selectedFiles.push(element.fileName);
  //       console.log("Added "+this.selectedFiles.length);
  //     } else {
  //       this.selectedFiles = this.selectedFiles.filter(obj => obj !== element.fileName);
  //       console.log("Removed "+this.selectedFiles.length);
  //     }
  // }



  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.PartialTransformFileListDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.PartialTransformFileListDataSource.data.forEach(row => this.selection.select(row));
  }


}