import { Error } from './error';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FailedObjectInfoService } from 'src/app/services/failed-object-info.service';
import { MatSelectChange } from '@angular/material/select';
import swal from 'sweetalert2';
import { ReprocessService } from 'src/app/services/reprocess.service';

@Component({
  selector: 'app-reprocess-dialogbody',
  templateUrl: './reprocess-dialogbody.component.html',
  styleUrls: ['./reprocess-dialogbody.component.css']
})
export class ReprocessDialogbodyComponent implements OnInit {
  responseArray: Error;
  fieldValue: string;
  oldValue: string;
  newValue: string;
  fileName:string;
  formFieldList = ['Type', 'Name', 'Revision'];


  constructor(public dialogRef: MatDialogRef<ReprocessDialogbodyComponent>, private failedobjectinfoservice: FailedObjectInfoService, private reprocessService:ReprocessService) {
    //Get the object from ErrorTableComponent
    this.failedobjectinfoservice.invokeEvent.subscribe(data => {
      this.responseArray = data;
      this.fileName = this.responseArray.filename;
    });
  }

  ngOnInit(): void {
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

  //Close the Reprocess window
  close() {
    this.dialogRef.close("Close the window");
  }

  //Update the new values
  UpdateData() {
    swal.fire({
      title: 'Are you sure?',
      text: "You want to Reprocess the object with this change?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4b4276',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Reprocess',
    }).then((result) => {
      if (result.isConfirmed) {
         
        this.reprocessService.reprocessObject(this.oldValue, this.newValue, this.fileName).subscribe(
          data=>{
            console.log("response : "+data);
            swal.fire({
              title: 'Great!',
              text: data,
              icon: 'success',
              showConfirmButton: false,
              timer: 3000
            });
          },
          error => {
          //  alert("Object Reprocessing failed!!");
            swal.fire({
              title: 'Oops!',
              text: "Object Reprocessing failed!!",
              icon: 'error',
              showConfirmButton: false,
              timer: 3000
            });
            
          }
        );
        window.setTimeout(function(){ 
          location.reload();
      } ,2000);

      }
    })
  }

}
