import { SegregatorPreviewComponent } from './../segregator-preview/segregator-preview.component';
import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import * as $ from 'jquery';
import { tag, adminType } from './tagfile';
import { Router } from '@angular/router';
import { TransformService } from '../services/transform.service';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IsMandatoryDialogComponent } from '../is-mandatory-dialog/is-mandatory-dialog.component';
import {SharedService} from '../services/shared.service';
import { stringify } from 'querystring';
import {mappingInfo} from '../segregator/tagfile';

//declare var $: any;

interface TypeDropdown {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-segregator',
  templateUrl: './segregator.component.html',
  styleUrls: ['./segregator.component.css'],
  entryComponents: [SegregatorPreviewComponent],//to open the Segregation Preview component in Dialog
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

  public taglist: String[] = [];
  public typelist: String[] = [];
  public valueList: String[] = [];
  public selectedAdminValue: string;
  public adminSelect: string;
  public selectedTag: string;
  public is_Mandatory: boolean =false;
  public process_Invalid_Char: boolean=false;
  public default_value: string; 
  public check: boolean= false;
  public valCheck:any;							
  isEmpty: boolean = false;
  @ViewChild('matSelect') matSelect: MatSelect;
  adminTypeDropdownList: TypeDropdown[] = [
    { value: 'Type', viewValue: 'Type' },
    { value: 'Name', viewValue: 'Name' },
    { value: 'Revision', viewValue: 'Revision' },
    { value: 'Owner', viewValue: 'Owner' },
    { value: 'Relationship', viewValue: 'Relationship' },
    { value: 'Attribute', viewValue: 'Attribute' },
    { value: 'Policy', viewValue: 'Policy' }
  ];
loginDialogRef: any;

  constructor(private dialog: MatDialog, private router: Router, private transformservice: TransformService,
    public share :SharedService) { }
  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe(value1 => {
      this.adminSelect = value1;
		for (let index = 0; index < this.share.typeinfolist.length; index++) {      
           this.share.typeinfolist[index].adminType=this.adminSelect ;
        }	
    });
  }
  ngOnInit(): void {
    this.getAllUniqueTags();
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

    //On Typelist single Click, mark the tag as mandatory
    $(".tagswrapper").click(function (event) {
      event.stopImmediatePropagation();
     // alert("Mark Mandatory");
     
    });
    

    //On Typelist DoubleClick, add tag to taglist and remove it from typelist
    $(".tagswrapper").dblclick(function (event) {
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

  //Search Filter
  applyFilter(value) {
    this.taglist = this.search(value);
  }

  search(value: string) {
    let filter = value.toLowerCase();
    return this.valueList.filter(option => option.toLowerCase().includes(filter));
  }

  getAllUniqueTags() {
    this.transformservice.getAllUniqueTagList().subscribe(
      data => {
        this.taglist = data;
        this.valueList = this.taglist;
        if (this.taglist.length == 0) {
          this.isEmpty = true;
        }
      },
      err => {
        swal.fire({
          title: 'Oops...',
          text: "Problem in getting tag data",
          icon: 'error',
          confirmButtonColor: "#4b4276"
        });
      }
    );
  }


  updateTypeNameDB() {
	  
	  for (let index1 = 0; index1 < this.typelist.length; index1++) {    
      console.log("first Loop Value:"+this.typelist[index1]);
      this.check=false;
      for (let index = 0; index < this.share.typeinfolist.length; index++) {
       console.log("Second Loop Value:"+this.share.typeinfolist[index].sourceValue);
          if(this.share.typeinfolist[index].sourceValue.trim()==this.typelist[index1].trim()){
              console.log("hai");
              this.check=true;
           break;
          }
       }
    if(this.check==false){
      this.valCheck=this.typelist[index1].trim();
      console.log("nai hai"+this.typelist[index1]);
      this.share.typeinfolist.push(new mappingInfo(this.selectedAdminValue,
       this.valCheck,"NA",false,false));
      } 
    }
	  
    if (this.adminSelect == undefined) {
      swal.fire({
        text: "Please select Admin Type",
        timer: 2000,
        icon: 'warning',
        showConfirmButton: false,
      });
    } else if ((this.typelist.length == 0)) {
      swal.fire({
        text: "Please select Values",
        timer: 2000,
        icon: 'warning',
        showConfirmButton: false,
      });
    } else {
      this.transformservice.updateType(this.share.typeinfolist);
      swal.fire({
        text: "Values Added",
        timer: 2000,
        icon: 'success',
        showConfirmButton: false,
      });
      if (this.taglist.length == 0) {
        this.isEmpty = true;
      }
      //Make the list empty once values added into DB
	  this.adminSelect = undefined;						   
      this.typelist.length = 0;
      this.selectedAdminValue = " ";
    }
  }

  //Open Segregation Preview in Dialog
  loadSegregationPreview() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    this.dialog.open(SegregatorPreviewComponent, dialogConfig);
  }
  //for Madatory Atrribute check Dialog box
  ontagClick($event){
    this.share.setTypeList(this.typelist);
    event.stopImmediatePropagation();
    this.selectedTag = $(event.target).text(); 
    this.share.setselectedTag (this.selectedTag);  
    this.share.setadminSelect(this.selectedAdminValue);	   
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width="25%";
      this.loginDialogRef=this.dialog.open(IsMandatoryDialogComponent, dialogConfig);


   this.loginDialogRef.afterClosed().subscribe(result => {
    if(this.share.getCheckDelete()){
      var elem=this.share.taglist.pop();
      this.taglist.push(elem);

      for (var i = this.share.typeinfolist.length - 1; i >= 0; --i) {
        if (this.share.typeinfolist[i].sourceValue.trim()== elem) {
          this.share.typeinfolist.splice(i, 1);
          console.log("Deleted From Shared");
        }
      }   
    }
  });
  }
  
}
