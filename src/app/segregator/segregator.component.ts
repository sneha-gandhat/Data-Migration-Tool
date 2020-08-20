import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import * as $ from 'jquery';
import { tag, adminType } from './tagfile';
import { Router } from '@angular/router';

//declare var $: any;

interface TypeDropdown {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-segregator',
  templateUrl: './segregator.component.html',
  styleUrls: ['./segregator.component.css']
})
export class SegregatorComponent implements OnInit {

  //typelist:adminType[]=[new adminType(1,"red")];
  // taglist:tag[]=[
  //   new tag(1,"red"),
  //   new tag(2,"green"),
  //   new tag(3,"blue"),
  //   new tag(4,"yellow"),
  //   new tag(5,"pink"),
  //   new tag(6,"purple"),
  //   new tag(7,"violet"),
  //   new tag(8,"maroon")

  // ]

  public taglist: String[] = ['Product', 'Season', 'Seasonal Plan', 'Brand', 'Vendor', 'Supplier', 'FOB', 'OBS Date', 'Freight Cost', 'Shipping Cost',
    'Merchandize', 'Product Name', 'Supplier ID', 'Concept', 'COB', 'PricePoint', 'Assortment', 'Bundle Price', 'VendorID',
    'Port', 'Budget', 'HTS Code', 'AssortmentId', 'Program', 'Slot', 'BoxSize', 'BrandName', 'Production', 'Developmet', 'Company',
    'Title', 'Year', 'Plan', 'Joint', 'Mould', 'Placeholder', 'ItemSetup', 'Width', 'Height', 'Volume', 'Colors', 'Swatch', 'Batch',]
  public typelist: String[] = []
  adminTypeDropdownList: TypeDropdown[] = [
    { value: 'Type', viewValue: 'Type' },
    { value: 'Relationship', viewValue: 'Relationship' },
    { value: 'Attribute', viewValue: 'Attribute' },
    { value: 'Policy', viewValue: 'Policy' }
  ];


  constructor(private router: Router) { }

  ngOnInit(): void {
    let typeListinstance = this;
    let taglistinstance = this;

    //On Taglist Click, add tag to Typelist and remove it from taglist 
    $(".wrapper").click(function (event) {
      event.stopImmediatePropagation();
      var selectedtag = $(event.target).text();
      console.log(selectedtag);
      //add tag to the TYPELIST
      typeListinstance.typelist.push(selectedtag);
      deletetag(selectedtag);
    });

    //On Typelist Click, add tag to taglist and remove it from typelist
    $(".tagswrapper").click(function (event) {
      event.stopImmediatePropagation();
      var selectedtag = $(event.target).text();
      console.log(selectedtag);
      //add tag to the TAGLIST
      var size = taglistinstance.taglist.push(selectedtag);
      deletetype(selectedtag);
    });

    function deletetag(deltag: string) {
      for (var i = taglistinstance.taglist.length - 1; i >= 0; --i) {
        if (taglistinstance.taglist[i].trim() == deltag.trim()) {
          taglistinstance.taglist.splice(i, 1);
          console.log(deltag + " tag deleted")
        }
      }
    }

    //On Click of Type,move to Taglist and delete from Typelist
    function deletetype(deltype: string) {
      for (var i = typeListinstance.typelist.length - 1; i >= 0; --i) {
        if (typeListinstance.typelist[i].trim() == deltype.trim()) {
          typeListinstance.typelist.splice(i, 1);
          console.log(deltype + " tag deleted")
        }
      }
    }






  }
  //Navigate to Data Mapping
  loadMappingPage() {
    this.router.navigate(['gotoDataMapping']);
  }
}
