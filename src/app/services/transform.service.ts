import { environment } from './../../environments/environment.prod';
import { Mapping } from './../mapping-preview/mapping';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { File } from '../upload-file-list/file';
import { data } from 'jquery';
import {mappingInfo} from '../segregator/tagfile';												  
import { TransformationResponse } from '../transform-progressbar/TransformationResponse';

@Injectable({
  providedIn: 'root'
})
export class TransformService {
  mappingURI: string = environment.transformationURI;

  constructor(private httpclient: HttpClient) { }

  //Get all the Mapping Details
  public getMappingDetails(): Observable<Mapping[]> {
    return this.httpclient.get<Mapping[]>(this.mappingURI);
  }
  //Delete mapping
  public deleteMapping(id): any {
    return this.httpclient.delete(this.mappingURI + "/" + id);
  }

  //Update mapping
  public updateMapping(id, mapping): any {
    return this.httpclient.put(this.mappingURI + "/" + id, mapping);
  }


  //get all unique tag to sisplay on sagerigation window
  public getAllUniqueTagList(): Observable<any> {
    return this.httpclient.get("http://localhost:8089/mappings/xmlTags");
  }

//get all Non Mapped Tag for mapping report
  public getNonMappedData(): Observable<any> {
    return this.httpclient.get("http://localhost:8089/mappings/getNonMapped");
  }

// get all Mandatory tag info
public getMandatoryTagInfo(): Observable<any> {
  return this.httpclient.get("http://localhost:8089/mappings/getMandatoryTagInfo");
}


// get all Mandatory tag info
public getInValidSchema_Info(): Observable<any> {
  return this.httpclient.get("http://localhost:8089/mappings/getInvalidSchema");
}

//getInvalidChar
public getInvalidChar_Info(): Observable<any> {
  return this.httpclient.get("http://localhost:8089/mappings/getInvalidChar");
}

  //Read  the xml and write tag,file and type name in DB
  public writeXMLToDB(file: String) {
    return this.httpclient.post("http://localhost:8089/mappings/addUniqueTags?file=" + file, file);
  }

 public updateType(typeinfolist: mappingInfo[]){
 
  this.httpclient.post<mappingInfo>("http://localhost:8089/mappings/updateTagInfo",typeinfolist
  ).subscribe(response => {
    console.log(response);
  }, err => {
    console.log(err.message);
  }, () => {
    console.log('completed');
  }
  );    
}

/*
  //get type name from sagerigation window and update on DB
  public updateType(typeName1: string, tagList1: String[]) {
    this.httpclient.post("http://localhost:8089/updateType?typeName=" + typeName1 + "&tagList=" + tagList1, typeName1).subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('completed');
    }
    );
  }
*/

  // read tag name based on admin type select on data mapping window
  public getSourceValue(adminType: string): Observable<any> {
    return this.httpclient.get("http://localhost:8089/mappings/sourceValue?adminType=" + adminType);

  }
  public getTargetValue(adminType: string): Observable<any> {
    return this.httpclient.get("http://localhost:8089/mappings/getEnoviaType/" + adminType);

  }


  //adding file mapping to database
  public uploadFileToServer(file: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    console.log("formData"+formData);										  

    const req = new HttpRequest('POST', "http://localhost:8089/mappings/file", formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpclient.request(req);
  }

  //adding mapping to database
  public addMappingRule(mapping: Mapping) {

	 return this.httpclient.post<Mapping>("http://localhost:8089/mappings", mapping);
  }

  public startTransformation(selectedFiles: Array<string>): Observable<TransformationResponse> {
    let params = { "fileName": selectedFiles };
    return this.httpclient.post<TransformationResponse>("http://localhost:8090/transform", "", { params: params })
  }
}
