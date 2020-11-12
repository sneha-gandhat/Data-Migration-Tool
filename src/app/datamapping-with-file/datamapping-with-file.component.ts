import { MappingPreviewComponent } from './../mapping-preview/mapping-preview.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { TransformService } from '../services/transform.service';
import swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetMappingIdService } from '../services/get-mapping-id.service';

@Component({
  selector: 'app-datamapping-with-file',
  templateUrl: './datamapping-with-file.component.html',
  styleUrls: ['./datamapping-with-file.component.css'],
  entryComponents: [MappingPreviewComponent],  //to open the component in Dialog
})
export class DatamappingWithFileComponent implements OnInit {
  loading: boolean;
  fileUpload: any;
  selectedFiles = [];
  progress = 0;
  message = '';
  step = 0;
  invalidCount: number = 60;

  constructor(private router: Router, private fileService: TransformService, private dialog: MatDialog, private mappingIdService: GetMappingIdService) {
    //Send nextStepSegregation() method to MappingReportComponent
    this.mappingIdService.invokeEvent.subscribe(value => {
      if (value === 'loadSegregation') {
        this.nextStepSegregation();
      }
    });
  }

  ngOnInit(): void {
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  nextStepSegregation() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  // Navigate to Mapping Preview window
  loadMappingPreview() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(MappingPreviewComponent, dialogConfig);
  }



  // Navigate to Mapping Report window
  openMappingReportView() {
    this.router.navigate(['MappingReport']);
  }

  //Download Sample Mapping File
  downloadFile() {
    let link = document.createElement("a");
    link.download = "Sample Mapping File";
    link.href = "assets/images/Sample Mapping File.xlsx";
    link.click();
  }

  // Check whether file is already added for upload
  filexists(obj) {
    var exist = true;
    for (var p = 0; p < this.selectedFiles.length; p++) {

      if (this.selectedFiles[p].fileName === obj.fileName) {
        exist = false;
        swal.fire({
          title: "'" + obj.fileName + "' already exists",
          text: 'Do you want to replace it?',
          showCancelButton: true,
          confirmButtonColor: "#4b4276",
          icon: 'warning',
          cancelButtonColor: '#d33',
        }).then((result) => {
          if (result.isConfirmed) {
            exist = true;
            swal.fire({
              title: 'Added!',
              text: 'New file has been added for upload.',
              icon: 'success',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
        break;
      }
    }
    return exist;
  }

  @ViewChild('inputFile') inputFile;
  @ViewChild('buttonElem') buttonElem;
  onChange(event: any) {

    let files: File = event.target.files;

    for (var i = 0; i < event.target.files.length; i++) {
      let file = files[i];
      let obj = {
        fileName: file.name,
        selectedFile: file

      }
      this.loading = false;
      this.fileUpload = event.target.files[i];
      if (this.filexists(obj)) {
        this.selectedFiles.push(obj);
      }
    }
  }

  // Open Dialog to select the file for upload
  openDialog() {
    this.inputFile.nativeElement.value = '';
    this.inputFile.nativeElement.click();
  }

  // Delete File which is selected for upload
  deleteFile(file) {
    swal.fire({
      title: 'Are you sure?',
      text: "You want to delete '" + file.fileName + "'?",
      showCancelButton: true,
      confirmButtonColor: '#4b4276',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      imageUrl: "/assets/images/del.gif",
      imageWidth: 100,
      imageHeight: 100,
    }).then((result) => {
      if (result.isConfirmed) {
        this.selectedFiles.splice(this.selectedFiles.indexOf(file), 1);
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

  // Upload file to server
  uploadFiles() {
    this.progress = 0;

    this.selectedFiles.forEach(element => {
      this.fileService.uploadFileToServer(element.selectedFile).subscribe(
        event => {
          swal.fire({
            text: "File uploaded successfully",
            icon: 'success',
            confirmButtonColor: '#4b4276',
          }).then((result) => {
            if (result.isConfirmed) {
              //Add code here to get the count of invalid schema values
              if (this.invalidCount > 0) {
                swal.fire({
                  title: 'Oops...',
                  text: this.invalidCount + ' Invalid schema values are mapped',
                  icon: 'warning',
                  confirmButtonColor: '#4b4276',
                });
              }
            }
          })
          if (event.type === HttpEventType.UploadProgress) {
            element.uploadedPercent = Math.round(100 * event.loaded / event.total);
            element.uploadCompleted = true;
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
          }
        },
        () => {
          swal.fire({
            title: 'Oops...',
            text: "Problem in uploading Mapping file",
            icon: 'error',
            confirmButtonColor: "#4b4276"
          });
          this.progress = 0;
          this.message = 'Could not upload the file!';
          element = undefined;
        });
    });
  }

}
