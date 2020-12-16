import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SegregatorPreviewComponent } from '../segregator-preview/segregator-preview.component';
import {SharedService} from '../services/shared.service';
import {mappingInfo} from '../segregator/tagfile';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-is-mandatory-dialog',
  templateUrl: './is-mandatory-dialog.component.html',
  styleUrls: ['./is-mandatory-dialog.component.css']
})
export class IsMandatoryDialogComponent implements OnInit {
  
  public is_Mandatory: boolean =false;
  public process_Invalid_Char: boolean=false;
  public default_value: string; 
  public defaultValue:string; 
  public selected_tag_value: string; 
  public taglist: String[] = [];
  public typelist: String[] = []; 									 
  public check:any=false;
  public isCharChecked: boolean = false;
  public isMandatoryChecked: boolean = false;
  mappingInfoObj = new mappingInfo("", "", "", false, false);
  constructor(public dialogRef: MatDialogRef<SegregatorPreviewComponent>, public shared:SharedService
 ) { 
  this.shared.setCheckDelete(false);

  for (var i =0 ;i< this.shared.typeinfolist.length;i++) {

    if (this.shared.typeinfolist[i].sourceValue.trim()==this.shared.getselectedTag().trim()) {
      console.log("matched"+this.shared.getcheckUI());
      this.isCharChecked=this.shared.typeinfolist[i].isProcess_invalid_chars;
      this.shared.setprocess_Invalid_Char(this.isCharChecked);

      this.isMandatoryChecked=this.shared.typeinfolist[i].isMandatory;
      this.shared.setis_Mandatory(this.isMandatoryChecked);

      this.defaultValue=this.shared.typeinfolist[i].default_value;
    }
  }  
 }
  ngOnInit(): void {
  }
  
  close() {
    this.shared.setCheckDelete(false);
    this.dialogRef.close("Close the window");
  }

  deleteTag(){
    this.shared.setCheckDelete(false);
    this.typelist = this.shared.getTypeList();
    this.selected_tag_value = this.shared.getselectedTag().trim();
    this.taglist = this.shared.getTagList();
   
    console.log(this.typelist + "tag deleted before");

    for (var i = this.typelist.length - 1; i >= 0; --i) {
      if (this.typelist[i].trim() == this.selected_tag_value) {
        this.typelist.splice(i, 1);
        this.shared.setCheckDelete(true);
      this.shared.taglist.push(this.selected_tag_value);
        console.log("=="+this.selected_tag_value + "==tag deleted")
      }
    }   
    console.log(this.typelist + " tag deleted after");
    this.dialogRef.close("Close the window");   
  }
  @ViewChild('default') default;
  ok(event) { 
    this.shared.setCheckDelete(false);

    this.default_value= this.default.nativeElement.value;
    if(this.default.nativeElement.value==""){
      this.shared.setdefault_value(this.defaultValue); 
       }else 
       this.shared.setdefault_value(this.default_value); 


    for (let index = 0; index <this.shared.typeinfolist.length; index++) {
      this.check=false;
      if(this.shared.typeinfolist[index].sourceValue.trim()==this.shared.getselectedTag().trim()){  
          this.check=true;
          console.log("same");      
          this.shared.typeinfolist.splice(index,1);
      }
    }

  this.shared.typeinfolist.push(new mappingInfo(this.shared.getadminSelect(),
  this.shared.getselectedTag(),
  this.shared.getdefault_value(),
  this.shared.getprocess_Invalid_Char(),
  this.shared.getis_Mandatory()));

  this.shared.setdefault_value("");
  this.shared.setprocess_Invalid_Char(false);
  this.shared.setis_Mandatory(false);

    console.log(this.shared.typeinfolist);
    this.dialogRef.close("Close the window"); 
  
  }
 
OnChangeGet_InvalidChar($event){
    this.process_Invalid_Char= $event.checked;   
    this.shared.setprocess_Invalid_Char(this.process_Invalid_Char);
    console.log (this.process_Invalid_Char);
}

OnChangeGet_isMandatory($event){
  this.is_Mandatory=$event.checked;
  this.shared.setis_Mandatory(this.is_Mandatory);
  console.log(this.is_Mandatory);
}


}
