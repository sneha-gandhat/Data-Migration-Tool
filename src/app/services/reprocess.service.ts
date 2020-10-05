import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReprocessService {

  constructor( private httpclient:HttpClient ) { }

  public reprocessObject(oldValue:string, newValue:string, fileName:string):Observable<any>{
   var datamap = {oldValue:oldValue,newValue:newValue,fileName:fileName};
   let HTTPOptions:Object = {
    responseType: 'text'
 } 
    return this.httpclient.post<string>("http://localhost:8091/load/reprocess",datamap,
    HTTPOptions);
  }
}
