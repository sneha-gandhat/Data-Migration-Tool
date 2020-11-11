import { MandatoryTag } from './mandatorytag';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Mapping } from '../mapping-preview/mapping';
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
  nonSegregatedTagList: string[] = ['product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name'];
  nonMappedTagList: string[] = ['product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name'];
  invalidCharacterTagList: string[] = ['product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name', 'product', 'product_id', 'brand_id', 'model_year', 'list_price', 'category', 'category_id', 'brand_name'];
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

  constructor(private router: Router, private dialog: MatDialog, private mappingIdService: GetMappingIdService) {
    this.dataMappingList.push(new Mapping(0, "Type", "Product", "Part"));
    this.dataMappingList.push(new Mapping(0, "Attribute", "Product_id", "Part_id"));
    this.dataMappingList.push(new Mapping(0, "Type", "Product", "Part"));
    this.dataMappingList.push(new Mapping(0, "Policy", "Product_policy", "EC Part"));
    this.dataMappingList.push(new Mapping(0, "Attribute", "Product_name", "Part_name"));
    this.dataMappingList.push(new Mapping(0, "Type", "Product", "Part"));
    this.dataMappingList.push(new Mapping(0, "Attribute", "Product_id", "Part_id"));
    this.dataMappingList.push(new Mapping(0, "Type", "Product", "Part"));
    this.dataMappingList.push(new Mapping(0, "Type", "Product", "Part"));
    this.dataMappingList.push(new Mapping(0, "Policy", "Product_policy", "EC Part"));
    this.dataMappingList.push(new Mapping(0, "Attribute", "Product_name", "Part_name"));
    this.dataMappingList.push(new Mapping(0, "Type", "Product", "Part"));
    this.dataMappingList.push(new Mapping(0, "Attribute", "Product_id", "Part_id"));
    this.dataMappingList.push(new Mapping(0, "Type", "Product", "Part"));
    this.dataMappingList.push(new Mapping(0, "Policy", "Product_policy", "EC Part"));
    this.dataMappingList.push(new Mapping(0, "Attribute", "Product_name", "Part_name"));
    this.dataMappingList.push(new Mapping(0, "Type", "Product", "Part"));
    this.dataMappingListDataSource = new MatTableDataSource(this.dataMappingList);

    this.mandatoryTagList.push(new MandatoryTag("Type", "Product", "P1"));
    this.mandatoryTagList.push(new MandatoryTag("Type", "Brand", "B1"));
    this.mandatoryTagList.push(new MandatoryTag("Type", "Category", "C1"));
    this.mandatoryTagList.push(new MandatoryTag("Attribute", "Product_id", "111"));
    this.mandatoryTagList.push(new MandatoryTag("Attribute", "Product_name", "Prod1"));
    this.mandatoryTagList.push(new MandatoryTag("Attribute", "Product_rev", "A"));
    this.mandatoryTagList.push(new MandatoryTag("Type", "Product", "P1"));
    this.mandatoryTagList.push(new MandatoryTag("Type", "Category", "C1"));
    this.mandatoryTagList.push(new MandatoryTag("Attribute", "Product_id", "111"));
    this.mandatoryTagList.push(new MandatoryTag("Attribute", "Product_name", "Prod1"));
    this.mandatoryTagList.push(new MandatoryTag("Attribute", "Product_rev", "A"));
    this.mandatoryTagList.push(new MandatoryTag("Type", "Product", "P1"));
    this.mandatoryTagList.push(new MandatoryTag("Type", "Brand", "B1"));
    this.mandatoryTagList.push(new MandatoryTag("Type", "Category", "C1"));
    this.mandatoryTagList.push(new MandatoryTag("Attribute", "Product_id", "111"));
    this.mandatoryTagList.push(new MandatoryTag("Attribute", "Product_name", "Prod1"));
    this.mandatoryTagList.push(new MandatoryTag("Attribute", "Product_rev", "A"));
    this.mandatoryTagListDataSource = new MatTableDataSource(this.mandatoryTagList);
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

  //Navigate to Transformation Progress Bar
  openTranformProgressView() {
    this.router.navigate(['gotoTransformationProgressBar']);
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

}
