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

  //Get all failed transform object Details
  public getTransformFailedObjectDetails(): Observable<Error[]> {
    return this.httpclient.get<Error[]>(this.monitorURI + "trans/getObjects");
  }

  //Get all failed load object Details
  public getLoadFailedObjectDetails(): Observable<Error[]> {
    return this.httpclient.get<Error[]>(this.monitorURI + "load/getObjects");
  }

  public getSuccessObjectCount(): any {
    return this.httpclient.get(this.monitorURI + "trans/getCountObjects/success");
  }
}
