import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UniqueTags } from '../segregator-preview/uniquetags';
import { GetMappingIdService } from '../services/get-mapping-id.service';
import {UniqueTagPreviewService} from '../services/unique-tag-preview.service';																			   

@Component({
  selector: 'app-modify-uniquetags-mapping-dialogbody',
  templateUrl: './modify-uniquetags-mapping-dialogbody.component.html',
  styleUrls: ['./modify-uniquetags-mapping-dialogbody.component.css']
})
export class ModifyUniquetagsMappingDialogbodyComponent implements OnInit {
  selectedAdminValue: string = " ";
  tagValue: string = " ";
  fileName: string = " ";
  mappingId: number;
  uniqueTags = new UniqueTags(0, "", "", "");
  adminTypeList = ['Type', 'Name', 'Revision', 'Owner', 'Attribute', 'Policy', 'Relationship', 'NA'];

  constructor(public dialogRef: MatDialogRef<ModifyUniquetagsMappingDialogbodyComponent>, private mappingIdService: GetMappingIdService,private tagPreview:  UniqueTagPreviewService) {
    //Get Mapping
    this.mappingIdService.invokeEvent.subscribe(data => {
      this.uniqueTags = data;
      //Set existing mapping values to modify mapping
      this.mappingId = this.uniqueTags.id;
      this.fileName = this.uniqueTags.fileName;
      this.tagValue = this.uniqueTags.tagName;
      this.selectedAdminValue = this.uniqueTags.adminType;
    });
  }

  ngOnInit(): void {
  }

  // Modify Unique tag Mapping and save into DB
  modifyUniqueTagMapping() {

   this.tagPreview.modifyUniqueTag(this.selectedAdminValue,this.tagValue,this.mappingId);   
   this.cancel();
  }

  //Cancel value selection for Unique tag Mapping and close the window
  cancel() {
    this.dialogRef.close("Close the window");
  }
}
