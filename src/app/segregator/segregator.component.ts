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


  constructor(private dialog: MatDialog, private router: Router, private transformservice: TransformService) { }

  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe(value1 => {
      this.adminSelect = value1;
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
      this.transformservice.updateType(this.adminSelect, this.typelist);
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
}
