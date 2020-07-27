import { File } from './file';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-upload-file-list',
  templateUrl: './upload-file-list.component.html',
  styleUrls: ['./upload-file-list.component.css']
})
export class UploadFileListComponent implements OnInit {
  public filelist: File[] = [
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, ""),
    new File("ETL", "2020-01-16", ".ppt", 100, "")
];
  constructor() { }

  ngOnInit(): void {
  }

}
