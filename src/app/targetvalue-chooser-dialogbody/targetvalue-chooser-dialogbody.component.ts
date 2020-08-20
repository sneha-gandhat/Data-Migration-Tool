import { SelectValueService } from './../services/select-value.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-targetvalue-chooser-dialogbody',
  templateUrl: './targetvalue-chooser-dialogbody.component.html',
  styleUrls: ['./targetvalue-chooser-dialogbody.component.css']
})
export class TargetvalueChooserDialogbodyComponent implements OnInit {
  selectedValue: string;
  valueList: Array<string> = [];
  values: Array<string> = [];

  constructor(private selectvalueService: SelectValueService, public dialogRef: MatDialogRef<TargetvalueChooserDialogbodyComponent>) {
    //Get List of values (Source/Target)
    this.selectvalueService.invokeEvent.subscribe(value => {
      this.values = value;
      this.valueList = this.values;
    });
  }

  ngOnInit() {

  }

  //Search Filter
  applyFilter(value) {
    this.valueList = this.search(value);
  }

  search(value: string) {
    let filter = value.toLowerCase();
    return this.values.filter(option => option.toLowerCase().includes(filter));
  }

  //Set selected Target value
  setBtnValue(value) {
    this.selectedValue = value;
  }

  //Submit selected Target value
  submitValue() {
    //Send selected value (Source/Target)
    this.selectvalueService.setValue(this.selectedValue);
    //Close Dialog
    this.dialogRef.close("Selected value submitted successfully");
  }
}
