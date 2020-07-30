import { File } from './file';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-upload-file-list',
  templateUrl: './upload-file-list.component.html',
  styleUrls: ['./upload-file-list.component.css']
})
export class UploadFileListComponent implements OnInit {
  searchValue:string = '';

  public filelist: File[] = [
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("Upload", "2020-01-16", ".ppt", 100, ""),
    new File("Material", "2020-01-16", ".ppt", 100, ""),
    new File("Fileread", "2020-01-16", ".ppt", 100, ""),
    new File("Module", "2020-01-16", ".ppt", 100, ""),
    new File("Route", "2020-01-16", ".ppt", 100, ""),
    new File("Filter", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("Upload", "2020-01-16", ".ppt", 100, ""),
    new File("Material", "2020-01-16", ".ppt", 100, ""),
    new File("Fileread", "2020-01-16", ".ppt", 100, ""),
    new File("Module", "2020-01-16", ".ppt", 100, ""),
    new File("Route", "2020-01-16", ".ppt", 100, ""),
    new File("Filter", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, "")
  ];
  constructor() { }

  ngOnInit(): void {

  }

  deleteFile() {

  }
  downloadFile() {

  }
}
