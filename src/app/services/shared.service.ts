import { Injectable } from '@angular/core';
import {mappingInfo} from '../segregator/tagfile';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public is_Mandatory: boolean =false;
  public isProcess_invalid_chars: boolean=false;
  public default_value: string; 
  public selectedTag: string;
  public adminSelect: string;  
  typeinfolist: mappingInfo[] = [];  
  public taglist: String[] = [];
  public typelist: String[] = [];	
  public checkDelete:any=false;
public defaultValueUI:string;
public isCharCheckedUI: boolean=false;
public isMandatoryCheckedUI

  constructor() { }


  setdefaultValueUI(data){				 
    this.defaultValueUI=data; 
  }

  getdefaultValueUI(){
    return this.defaultValueUI;
}

  
  setisMandatoryCheckedUI(data){				 
    this.isMandatoryCheckedUI=data; 
  }

  getisMandatoryCheckedUI(){
    return this.isMandatoryCheckedUI;
}

  setcheckUI(data){				 
    this.isCharCheckedUI=data; 
  }

  getcheckUI(){
    return this.isCharCheckedUI;
}


  setCheckDelete(data){				 
    this.checkDelete=data; 
  }

  getCheckDelete(){
    return this.checkDelete;
}

deleteFunbctionality(){
  
}

  setselectedTag(data){				 
    this.selectedTag=data; 
  }

setTypeList(data){
    this.typelist=data;
}

getTypeList(){
  return this.typelist;
}


setTagList(data){
  this.taglist=data;
}

getTagList(){
return this.taglist;
}				 
getselectedTag(){
  return this.selectedTag;
}
setadminSelect(data){
  this.adminSelect=data;
}

getadminSelect(){
  return this.adminSelect;
}
  setis_Mandatory(data)
      {
    this.is_Mandatory=data;
    }

    getis_Mandatory(){
      return this.is_Mandatory;
    }

    setprocess_Invalid_Char(data){
      this.isProcess_invalid_chars=data;
    }

    getprocess_Invalid_Char(){
      return this.isProcess_invalid_chars;
    }

    setdefault_value(data){
      this.default_value=data;
    }

    getdefault_value(){
      return this.default_value;
    }




}
