import { MandatoryTag } from './mandatorytag';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Mapping } from '../mapping-preview/mapping';
import { TransformService } from './../services/transform.service';																   
import { MappingPreviewComponent } from '../mapping-preview/mapping-preview.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SegregatorComponent } from '../segregator/segregator.component';
import { GetMappingIdService } from '../services/get-mapping-id.service';

@Component({
  selector: 'app-mapping-report',
  templateUrl: './mapping-report.component.html',
  styleUrls: ['./mapping-report.component.css'],
  entryComponents: [MappingPreviewComponent],  //to open the component in Dialog
})
export class MappingReportComponent implements OnInit, AfterViewInit {
  nonSegregatedTagList: string[];
  nonMappedTagList: string[] = [];
  invalidCharacterTagList: string[] = [];
  
  columnsToDisplay = ['adminType', 'sourceValue', 'destinationValue'];
  mandatoryTagColumnsToDisplay = ['adminTypeValue', 'sourceTagValue', 'defaultValue'];
  dataMappingListDataSource: any;
  mandatoryTagListDataSource: any;
  dataMappingList: Mapping[] = [];
  mandatoryTagList: MandatoryTag[] = [];
  nonSegregatedTagCount: number = 10;
  nonMappedTagCount: number = 15;
  invalidSchemaTagCount: number = 20;
  mandatoryTagCount: number = 25;
  invalidCharacterTagCount: number = 30;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private dialog: MatDialog, private mappingIdService: GetMappingIdService
    ,private transformservice: TransformService ) {
	    this.getAllUniqueTags();
      this.getNonMappedTags();
      this.getMandatoryTags();
      this.getInValidSchema();
      this.getInvalidChar();
   
  }

  ngOnInit(): void {
  }

  //Sorting
  ngAfterViewInit(): void {
    this.dataMappingListDataSource.sort = this.sort;
    this.mandatoryTagListDataSource.sort = this.sort;
  }

  //Search Filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataMappingListDataSource.filter = filterValue;
    this.mandatoryTagListDataSource.filter = filterValue;
  }

  //Navigate to Data Cleaning
  openDataCleaning() {
    this.router.navigate(['data-cleaning']);
  }

  //Navigate to Data Mapping
  loadMappingPage() {
    this.router.navigate(['gotoDataMapping']);
  }

  //Navigate to Mapping Preview
  openMappingPreview() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(MappingPreviewComponent, dialogConfig);
  }

  //Navigate to Segregation Window
  openSegregationWindow() {
    this.router.navigate(['gotoDataMapping']);
    //Call nextStepSegregation() method of DatamappingWithFileComponent
    setTimeout(() => {
      this.mappingIdService.callMethodOfDatamappingWithFileComponent();
    }, 0);
  }


  getAllUniqueTags() {
    this.transformservice.getAllUniqueTagList().subscribe(
      data => {
        this.nonSegregatedTagList = data;        
        this.nonSegregatedTagCount=this.nonSegregatedTagList.length;
      },     
    );
  }  

  getNonMappedTags(){
    this.transformservice.getNonMappedData().subscribe(
      data => {
        this.nonMappedTagList = data;        
        this.nonMappedTagCount= this.nonMappedTagList.length;
      },     
    );
  }

  getMandatoryTags(){
    this.transformservice.getMandatoryTagInfo().subscribe(
      data => {
        this.mandatoryTagListDataSource = data;                
        this.mandatoryTagCount= this.mandatoryTagListDataSource.length;

        console.log(" this.mandatoryTagListDataSource"+ this.mandatoryTagListDataSource);
        for (let index = 0; index < this.mandatoryTagListDataSource.length; index++) {
          const element = this.mandatoryTagListDataSource[index];
          console.log("element.defaultValue"+element.default_value);
          this.mandatoryTagList.push(new MandatoryTag(element.adminType, element.sourceValue, element.default_value));
        }
        this.mandatoryTagListDataSource = new MatTableDataSource(this.mandatoryTagList); 
      },     
    );
  }

  //this.getInvValidSchemagetInvValidSchema_Info();
  getInValidSchema(){
    this.transformservice.getInValidSchema_Info().subscribe(
      data => {
        this.dataMappingListDataSource = data;                
       this.invalidSchemaTagCount= this.dataMappingListDataSource.length;
      },     
    );
  }

  getInvalidChar(){
    this.transformservice.getInvalidChar_Info().subscribe(
      data => {
        this.invalidCharacterTagList = data;        
        this.invalidCharacterTagCount=this.invalidCharacterTagList.length;
      },     
    );
  }					  
}
