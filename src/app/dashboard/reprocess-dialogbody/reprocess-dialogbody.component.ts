import { Error } from './error';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FailedObjectInfoService } from 'src/app/services/failed-object-info.service';
import { MatSelectChange } from '@angular/material/select';
import swal from 'sweetalert2';

@Component({
  selector: 'app-reprocess-dialogbody',
  templateUrl: './reprocess-dialogbody.component.html',
  styleUrls: ['./reprocess-dialogbody.component.css']
})
export class ReprocessDialogbodyComponent implements OnInit {
  responseArray: Error;
  Flag1: boolean = false;
  fieldValue: string;
  oldValue: string;
  newValue: string;
  isEnable: boolean = false;
  formFieldList = ['Type', 'Name', 'Revision'];


  constructor(public dialogRef: MatDialogRef<ReprocessDialogbodyComponent>, private failedobjectinfoservice: FailedObjectInfoService) {
    //Get the object from ErrorTableComponent
    this.failedobjectinfoservice.invokeEvent.subscribe(data => {
      this.responseArray = data;
    });
  }

  ngOnInit(): void {
  }

  //Show Div on click of radio button
  enableDiv() {
    this.Flag1 = true;
  }

  //Update the old value field as per the selected value from dropdown list
  selectedFormField(event: MatSelectChange) {
    this.fieldValue = event.value;
    if (undefined == this.fieldValue) {
      this.oldValue = undefined;
    } else if ("Type" == this.fieldValue) {
      this.oldValue = this.responseArray.type;
    } else if ("Name" == this.fieldValue) {
      this.oldValue = this.responseArray.name;
    } else if ("Revision" == this.fieldValue) {
      this.oldValue = this.responseArray.revision;
    }
  }

  //Enables the update button if new value is entered
  changedNewValue(event: any) {
    this.isEnable = true;
  }

  //Close the Reprocess window
  close() {
    this.dialogRef.close("Close the window");
  }

  //Update the new values
  UpdateData() {
    swal.fire({
      title: 'Are you sure?',
      text: "You want to Reprocess the object with this changes?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4b4276',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Reprocess',
    }).then((result) => {
      if (result.isConfirmed) {
        this.fieldValue = "";
        this.oldValue = "";
        this.newValue = "";
        //Add logic here
        swal.fire({
          title: 'Great!',
          text: 'Object has been successfully Reprocessed!!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
  }

}
