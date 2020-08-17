import { Mapping } from './../mapping-preview/mapping';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-datamapping',
  templateUrl: './datamapping.component.html',
  styleUrls: ['./datamapping.component.css'],
})
export class DatamappingComponent implements OnInit {
  selectedValue: string;

  // Temporary list of values passed to dropdown
  adminTypeList = ['Type', 'Attribute', 'Policy', 'Relationship'];
  srcValueList = ['products', 'product_id', 'product_name', 'brand_id', 'category_id', 'model_year', 'list_price'];
  dstValueList = ['Part', 'Part Id', 'Part Name', 'Modified Date'];

  constructor() { }

  ngOnInit(): void {
  }

  // Add Mapping to DB
  addMapping() {

  }

}
