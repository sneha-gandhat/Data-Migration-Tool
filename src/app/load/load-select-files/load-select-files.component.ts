import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { LoadFileList } from './LoadFileList';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { HttpClient } from '@angular/common/http';
import { LoadService } from 'src/app/services/load.service';
import { File } from 'src/app/upload-file-list/file';
import { TransformationResponse } from 'src/app/transform-progressbar/TransformationResponse';

@Component({
  selector: 'app-load-select-files',
  templateUrl: './load-select-files.component.html',
  styleUrls: ['./load-select-files.component.css']
})
export class LoadSelectFilesComponent implements OnInit {

  columnsToDisplay = ['select', 'fileName', 'fileType'];
  fileList: File[] = [];
  PartialLoadFileListDataSource: any;
  PartialLoadFileList: Array<LoadFileList> = [];
  selectedFiles: Array<string> = [];
  isDisabled: boolean = false;//for move to Check status keep it true
  showInfo: boolean = false;
  responseArray: TransformationResponse;

  constructor(private router: Router, private fileService: FileUploadService, private httpClient: HttpClient, private loadService: LoadService) { }

  ngOnInit(): void {
    this.getAllFileDetails();
  }

  selection = new SelectionModel<LoadFileList>(true, []);
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
    this.router.navigate(['load-status-div']);
  }
  moveToDashboard() {
    this.router.navigate(['dashboard']);
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

  //service to read all the files
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
        this.PartialLoadFileList.push(new LoadFileList(fileName, objectType));
      });
    this.PartialLoadFileListDataSource = new MatTableDataSource(this.PartialLoadFileList);
    this.PartialLoadFileListDataSource.paginator = this.paginator;
    this.PartialLoadFileListDataSource.sort = this.sort;
  }

  //Load Service call
  triggerLoad() {
    console.log("File Size : " + this.selection.selected.length);
    if (this.selection.selected.length <= 0) {
      alert("Please select at least one file to proceed!!");
    } else {
      alert("Starting Load Process");
      let component = this;
      console.log("Files selected: " + this.selection.selected.length);
      console.log("Files selected: " + this.selection.selected.length);
      this.selection.selected.forEach(s => this.selectedFiles.push((s.fileName)));
      console.log("Files For LOAD" + this.selectedFiles);
      this.loadService.startLoad(this.selectedFiles).subscribe(
        data => {
          component.responseArray = data;
          console.log(this.responseArray);
          this.isDisabled = false;//indicates load is completed and move to status
          alert("Load is completed! Status check enabled!");
          //after Load Is Completed :
          alert("Result For " + this.responseArray.filesProcessed + "\n" +
            "Log Location " + this.responseArray.loggerFilePath + "\n" +
            "Objects Processed " + this.responseArray.totalObjectsToTransform + "\n" +
            "Objects Successful " + this.responseArray.totalSuccessfulObjects + "\n" +
            "Objects Failed " + this.responseArray.totalFailedObjects + "\n" +
            "Load Files Path " + this.responseArray.transformedFolderPath
          );
          if (confirm("Are you sure, you are done with load?")) {
            //Set session value for load
            sessionStorage.setItem("load", "true");
          }
        },
        error => {
          alert("Error" + error);
        }
      );

    }
  }





}
