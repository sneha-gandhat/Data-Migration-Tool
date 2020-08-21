import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { File } from '../upload-file-list/file';
// import { FileService } from 'file.service';
// import * as fileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  fileList: File[] = [];

  constructor(private httpclient: HttpClient) { }

  public getUploadedFilesDeatils(): Observable<File[]> {
    return this.httpclient.get<File[]>("http://localhost:8080/ETLfileservice/files/details");
  }

  public downloadFile(fileDownloadUri: string): any {
    console.log("In Service..");
    return this.httpclient.get(fileDownloadUri, { responseType: 'blob' });
  }

  public deleteFile(fileDeleteUri: string): any {
    console.log("In delete Service..");
    return this.httpclient.delete(fileDeleteUri);
  }

  public uploadFileToServer(file: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', "http://localhost:8080/ETLfileservice/uploadFile", formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpclient.request(req);
  }
}
