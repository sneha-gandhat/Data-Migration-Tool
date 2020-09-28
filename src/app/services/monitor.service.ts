import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  monitorURI: string = environment.monitorURI;

  constructor(private httpclient: HttpClient) { }

  /************************** Transform Services ****************************/

  //Get all failed transform object Details
  public getTransformFailedObjectDetails(): Observable<Error[]> {
    return this.httpclient.get<Error[]>(this.monitorURI + "trans/getObjects");
  }

  //Get Transform Successful Object Count
  public getTransformSuccessObjectCount(): Observable<number> {
    return this.httpclient.get<number>(this.monitorURI + "trans/getCountObjects/success");
  }

  //Get Transform Failed Object Count
  public getTransformFailedObjectCount(): Observable<number> {
    return this.httpclient.get<number>(this.monitorURI + "trans/getCountObjects/failed");
  }

  //Get Transform Successed Type Count
  public getTransformSuccessTypeCount(): Observable<any> {
    return this.httpclient.get<any>(this.monitorURI + "trans/getcountOfSuccessedType/success");
  }

  //Get Transform Failed Type Count
  public getTransformFailedTypeCount(): Observable<any> {
    return this.httpclient.get<any>(this.monitorURI + "trans/getcountOfSuccessedType/failed");
  }


  /***************************** Load Services *******************************/

  //Get all failed load object Details
  public getLoadFailedObjectDetails(): Observable<Error[]> {
    return this.httpclient.get<Error[]>(this.monitorURI + "load/getObjects");
  }

  //Get Load Successful Object Count
  public getLoadSuccessObjectCount(): Observable<number> {
    return this.httpclient.get<number>(this.monitorURI + "load/getCountObjects/success");
  }

  //Get Load Failed Object Count
  public getLoadFailedObjectCount(): Observable<number> {
    return this.httpclient.get<number>(this.monitorURI + "load/getCountObjects/failed");
  }

  //Get Load Successed Type Count
  public getLoadSuccessTypeCount(): Observable<any> {
    return this.httpclient.get<any>(this.monitorURI + "load/getcountOfSuccessedType/success");
  }

  //Get Load Failed Type Count
  public getLoadFailedTypeCount(): Observable<any> {
    return this.httpclient.get<any>(this.monitorURI + "load/getcountOfSuccessedType/failed");
  }


  //to get the number of Parsed File
  public getParsedFileNumber(): any {
    return this.httpclient.get("http://localhost:8089/totalParsedFile");
  }

  //to get the number of Unparsed File
  public getUnParsedFileNumber(): any {
    return this.httpclient.get("http://localhost:8089/totalUnparsedFile");
  }

  //number of object in parsed file
  public getNumOfObjinParsed(): any {
    return this.httpclient.get("http://localhost:8089/noOfObjectInparsedFile");
  }
  //number of object in Unparsed file
  public getNumOfObjinUnParsed(): any {
    return this.httpclient.get("http://localhost:8089/noOfObjectInunparsedFile");
  }
  
  public errorPreview():Observable<any>{
									 
    return this.httpclient.get<any>("http://localhost:8089/errorPreview");
   
									 
									   
																				 
     }

}
