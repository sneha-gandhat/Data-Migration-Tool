import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpResponse } from "@angular/common/http";
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { UploadFileListComponent } from '../upload-file-list/upload-file-list.component'
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css'],
})
export class UploadfilesComponent implements OnInit {
  progress = 0;
  message = '';

  ngOnInit(): void {
  }

  title = 'resumeMultipleUpload';
  selectedFiles = [];
  fileUpload: any;
  loading: boolean;
  canDropFolder = typeof DataTransferItem.prototype.webkitGetAsEntry === 'function';
  uploadPaths = [];

  constructor(private http: HttpClient, private router: Router, private fileService: FileUploadService) { }

  goToLink(url: string) {
    window.open(url, "_blank");
  }



  dropHandler(ev) {
    // Prevent default behavior(file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          let file = ev.dataTransfer.items[i].getAsFile();
          let obj = {
            fileName: file.name,
            selectedFile: file,
            fileId: `${file.name}-${file.lastModified}`,
            uploadCompleted: false
          }

          if (this.filexists(obj)) {
            this.selectedFiles.push(obj);
          }
          console.log('... file[' + i + '].name = ' + file.name);
        }
      }
      // this.selectedFiles.forEach(file => this.getFileUploadStatus(file));
    } else {

      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }
    }
  }

  loadTransform() {
    this.router.navigate(['gotoUploadFileList']);
  }
  resetFiles() {
    this.selectedFiles.splice(0, this.selectedFiles.length);

  }

  filexists(obj) {
    var exist = true;
    for (var p = 0; p < this.selectedFiles.length; p++) {

      if (this.selectedFiles[p].fileName === obj.fileName) {
        exist = false;
        if (confirm(obj.fileName + " already exists, Do you still want to add it ?")) {
          exist = true;
        }
        break;
      }
    }

    return exist;
  }
  dragOverHandler(ev) {
    console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    ev.stopPropagation();
  }

  getFileUploadStatus(file) {
    // fetch the file status on upload
    let headers = new HttpHeaders({
      "size": file.selectedFile.size.toString(),
      "x-file-id": file.fileId,
      'name': file.fileName
    });

    this.http
      .get("http://localhost:3000/status", { headers: headers }).subscribe(
        (res: any) => {
          file.uploadedBytes = res.uploaded;
          file.uploadedPercent = Math.round(100 * file.uploadedBytes / file.selectedFile.size);
          if (file.uploadedPercent >= 100) {
            file.uploadCompleted = true;
          }
        }, err => {
          console.log(err);
        }
      )
  }

  uploadFiles() {
    this.progress = 0;

    this.selectedFiles.forEach(element => {
      this.fileService.uploadFileToServer(element.selectedFile).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            element.uploadedPercent = Math.round(100 * event.loaded / event.total);
            element.uploadCompleted = true;
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            // console.log("Message : "+this.message);
            // this.fileInfos = this.fileService.getFiles();
          }
        },
        err => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          element = undefined;
        });
    });
    //alert("File Upload Completed!!");
    // this.selectedFiles = undefined;
  }

  resumeUpload(file) {
    //make upload call and update the file percentage
    const headers2 = new HttpHeaders({
      "size": file.selectedFile.size.toString(),
      "x-file-id": file.fileId,
      "x-start-byte": file.uploadedBytes.toString(),
      'name': file.fileName
    });
    console.log(file.uploadedBytes, file.selectedFile.size, file.selectedFile.slice(file.uploadedBytes).size);

    const req = new HttpRequest('POST', "http://localhost:3000/upload", file.selectedFile.slice(file.uploadedBytes, file.selectedFile.size + 1), {
      headers: headers2,
      reportProgress: true
    });

    this.http.request(req).subscribe(
      (res: any) => {
        if (res.type === HttpEventType.UploadProgress) {
          file.uploadedPercent = Math.round(100 * (file.uploadedBytes + res.loaded) / res.total);
          console.log(file.uploadedPercent);
          if (file.uploadedPercent >= 100) {
            file.uploadCompleted = true;
          }
        } else {
          if (file.uploadedPercent >= 100) {
            file.uploadCompleted = true;
          }
        }
      },
      err => {
        console.log(err)
      }
    )
  }
  deleteFile(file) {
    if (confirm("Are you sure you want to delete " + file.fileName + "?")) {
      this.selectedFiles.splice(this.selectedFiles.indexOf(file), 1);
    }
  }

  importFile(ev) {

    ev.preventDefault();

    if (ev.target.files.length == 0) {
      console.log("No file selected!");
      return
    }
    let file: File = ev.target.files[0];
    let obj = {
      fileName: file.name,
      selectedFile: file,

    }

    for (var i = 0; i < ev.target.files.length; i++) {

      console.log('... file[' + i + '].name = ' + ev.target.files[i].name);
    }
    // after here 'file' can be accessed and used for further process
  }

  @ViewChild('inputFile') inputFile;
  @ViewChild('buttonElem') buttonElem;
  @ViewChild('folderInput') folderInput;
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

  onBlur() {
    if (this.loading && document.activeElement !== this.buttonElem.nativeElement) {
      this.loading = false;
    }
  }

  openDialog() {
    this.inputFile.nativeElement.value = '';
    this.inputFile.nativeElement.click();
  }

  openDialog1() {
    this.folderInput.nativeElement.value = '';
    this.folderInput.nativeElement.click();
  }
  filesPicked(files) {
    console.log(files);
    this.uploadPaths = [];
    console.log(files.length);
    Array.prototype.forEach.call(files, file => {
      let obj = {
        fileName: file.name,
        selectedFile: file
      }
      this.uploadPaths.push(file.webkitRelativePath);
      this.selectedFiles.push(obj);
    });

  }
}