import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import * as $ from 'jquery';
import { tag, adminType } from './tagfile';
import { Router } from '@angular/router';
import { TransformService } from '../services/transform.service';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import swal from 'sweetalert2';

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

  public taglist: String[] = [];
  public typelist: String[] = [];
  public adminSelect: string;
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


  constructor(private router: Router, private transformservice: TransformService) { }

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
  //Navigate to Data Mapping
  loadMappingPage() {
    this.router.navigate(['gotoDataMapping']);
  }

  getAllUniqueTags() {
    this.transformservice.getAllUniqueTagList().subscribe(
      data => {
        this.taglist = data;
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
        timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
      });
    } else if ((this.typelist.length == 0)) {
      swal.fire({
        text: "Please select Values",
        timer: 1000,
        icon: 'warning',
        showConfirmButton: false,
      });
    } else {
      this.transformservice.updateType(this.adminSelect, this.typelist);
      swal.fire({
        text: "Values Added",
        timer: 1000,
        icon: 'success',
        showConfirmButton: false,
      });
      window.location.reload()
    }
  }

}
