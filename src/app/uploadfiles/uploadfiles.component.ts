import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType } from "@angular/common/http";
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})
export class UploadfilesComponent implements OnInit { 

  ngOnInit(): void {
  }

  title = 'resumeMultipleUpload';
  selectedFiles = [];
  fileUpload: any;
  loading: boolean;

  constructor(private http: HttpClient){}

  goToLink(url: string){
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
          this.selectedFiles.push(obj);
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

  dragOverHandler(ev) {
    console.log('File(s) in drop zone'); 
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    ev.stopPropagation();
  }

  


  getFileUploadStatus(file){
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
          file.uploadedPercent = Math.round(100* file.uploadedBytes/file.selectedFile.size);
          if(file.uploadedPercent >= 100){
            file.uploadCompleted = true;
          }
        },err => {
          console.log(err);
        }
      )
  }

  uploadFiles(){
    this.selectedFiles.forEach(file => {
      if(file.uploadedPercent < 100)
        this.resumeUpload(file);
    })
  }

  resumeUpload(file){
    //make upload call and update the file percentage
    const headers2 = new HttpHeaders({
      "size": file.selectedFile.size.toString(),
      "x-file-id": file.fileId,
      "x-start-byte": file.uploadedBytes.toString(),
      'name': file.fileName
    });
    console.log(file.uploadedBytes, file.selectedFile.size, file.selectedFile.slice(file.uploadedBytes).size);
    
    const req = new HttpRequest('POST', "http://localhost:3000/upload", file.selectedFile.slice(file.uploadedBytes, file.selectedFile.size + 1),{
           headers: headers2,
          reportProgress: true
        });

    this.http.request(req).subscribe(
      (res: any) => {
        if(res.type === HttpEventType.UploadProgress){
          file.uploadedPercent = Math.round(100* (file.uploadedBytes+res.loaded)/res.total);
          console.log(file.uploadedPercent);
          if(file.uploadedPercent >= 100){
            file.uploadCompleted = true;
          }
        }else{
          if(file.uploadedPercent >= 100){
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
    if(confirm("Are you sure you want to delete "+file.fileName+"?")) {
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
    this.selectedFiles.push(obj);
    }

    
  
  }

  onBlur() {
    if(this.loading && document.activeElement !== this.buttonElem.nativeElement) {
      this.loading = false;
    }
  }

  openDialog() {
    this.inputFile.nativeElement.value = '';
    this.inputFile.nativeElement.click();
  }

}