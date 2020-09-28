import { FileError } from './fileerror';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MonitorService } from './../../services/monitor.service';


@Component({
  selector: 'app-file-error-table',
  templateUrl: './file-error-table.component.html',
  styleUrls: ['./file-error-table.component.css']
})
export class FileErrorTableComponent implements OnInit, AfterViewInit {
  columnsToDisplay = ['filename', 'size', 'error'];  
  tempErrorList: any = [];
  fileErrorList: FileError[] = [];
  fileErrorListDataSource: any;  
  errObj = new FileError("", "", "");
  size:number =0;
  constructor(private monitorservice: MonitorService) {
  this.geterrorPreview();
  }
  
  ngOnInit(): void {
  }
  
  //Pagination & Sorting
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(): void {
    
  }

  //Search Filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.fileErrorListDataSource.filter = filterValue;
  }

  //Reprocess the failed object
  reProcess() {

  }

geterrorPreview(){
  console.log("In error");
  this.monitorservice.errorPreview().subscribe(
    data => {
      this.tempErrorList = data;
 
      console.log("----"+data);    
      for (let i in this.tempErrorList) {  
        console.log(this.tempErrorList[i]); 
        this.errObj = this.tempErrorList[i]; 
        let fileName = this.errObj.fileName;     
        let fileSize = this.errObj.fileSize;
        let err = this.errObj.error;
        console.log(fileName, fileSize, err);
        this.fileErrorList.push(new FileError(fileName, fileSize,err));	

      }
      this.fileErrorListDataSource = new MatTableDataSource(this.fileErrorList);
      this.fileErrorListDataSource.paginator = this.paginator;
      this.fileErrorListDataSource.sort = this.sort;

      }
  
  );
}

}
