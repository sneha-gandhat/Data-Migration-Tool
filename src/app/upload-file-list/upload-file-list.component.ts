import { File } from './file';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FileUploadService } from '../services/file-upload.service';
import * as fileSaver from 'file-saver';
import swal from 'sweetalert2';


@Component({
  selector: 'app-upload-file-list',
  templateUrl: './upload-file-list.component.html',
  styleUrls: ['./upload-file-list.component.css'],
})

export class UploadFileListComponent implements OnInit, AfterViewInit {
  //columnsToDisplay = ['fileName', 'uploadedDate', 'fileType', 'fileSize', 'fileAction'];
  columnsToDisplay = ['fileName', 'size', 'modified', 'fileAction'];
  fileList: File[] = [];
  filelistdataSource: any;
  //filelistdataSource = new MatTableDataSource(filelist);
  fromSelected: string;
  toSelected: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fileService: FileUploadService) {
  }

  ngAfterViewInit(): void {
    this.filelistdataSource.paginator = this.paginator;
    this.filelistdataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllFileDetails();
  }

  //Delete File
  deleteFile(item: any) {
    swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this file?",
      showCancelButton: true,
      confirmButtonColor: '#4b4276',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      imageUrl: "/assets/images/del.gif",
      imageWidth: 100,
      imageHeight: 100,
    }).then((result) => {
      if (result.isConfirmed) {
		  
   this.fileService.deleteFileFromDB(item.fileName).subscribe(response => {
        console.log(response);
								
      }, err => {
        console.log(err.message);
      }, () => {
        console.log('completed');	
      }
      );		 
		 
		  
        this.fileService.deleteFile(item.fileDeleteUri).subscribe(
          data => {
            this.getAllFileDetails();
          },
          () => { }
        );
        swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
  }

  //Download File
  downloadFile(item: any) {
    this.fileService.downloadFile(item.fileDownloadUri).subscribe(response => {
      let blob: any = new Blob([response], { type: 'text/json; charset=utf-8' });
      fileSaver.saveAs(blob, item.fileName);
    }), () => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully');
  }

  //Render all files data in table
  getAllFileDetails() {
    this.fileService.getUploadedFilesDeatils().subscribe(
      data => {
        this.fileList = data;
        console.log(this.fileList);
        this.filelistdataSource = new MatTableDataSource(this.fileList);
        this.filelistdataSource.paginator = this.paginator;
        this.filelistdataSource.sort = this.sort;
      },
      () => {
        swal.fire({
          title: 'Oops...',
          text: "Problem in getting file data",
          icon: 'error',
          confirmButtonColor: "#4b4276"
        });
      }
    );
  }
}
