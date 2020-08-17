import { Mapping } from './../mapping-preview/mapping';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-datamapping-with-file',
  templateUrl: './datamapping-with-file.component.html',
  styleUrls: ['./datamapping-with-file.component.css'],
})
export class DatamappingWithFileComponent implements OnInit {
  loading: boolean;
  fileUpload: any;
  selectedFiles = [];
  progress = 0;
  message = '';

  constructor(private router: Router,private fileService:FileUploadService) { }

  ngOnInit(): void {
  }

  // Navigate to Mapping Preview window
  loadMappingPreview() {
    this.router.navigate(['gotoMappingPreview']);
  }

  // Check whether file is already added for upload
  filexists(obj){
    var exist=true;     
    for(var p=0;p<this.selectedFiles.length;p++){ 
      
        if(this.selectedFiles[p].fileName===obj.fileName){
          exist=false;
          if (confirm(obj.fileName+ " already exists, Do you still want to add it ?")){
            exist=true;
          }
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
    let file= files[i];
    let obj = {
      fileName: file.name,
      selectedFile: file
      
		  }
    this.loading = false;
    this.fileUpload = event.target.files[i];
    if(this.filexists(obj)) {
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
    if(confirm("Are you sure you want to delete "+file.fileName+"?")) {
      this.selectedFiles.splice(this.selectedFiles.indexOf(file), 1);
    }
  }

  // Upload file to server
  uploadFiles(){
    this.progress = 0;
  
    this.selectedFiles.forEach(element => {
     this.fileService.uploadFileToServer(element.selectedFile).subscribe(
       event => {
         if (event.type === HttpEventType.UploadProgress) {
          element.uploadedPercent = Math.round(100 * event.loaded / event.total);
          element.uploadCompleted = true;
         } else if (event instanceof HttpResponse) {
           this.message = event.body.message;
         }
       },
       err => {
         this.progress = 0;
         this.message = 'Could not upload the file!';
         element = undefined;
       });
   });
  }

}
