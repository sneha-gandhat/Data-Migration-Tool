import { Mapping } from './../mapping-preview/mapping';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransformService {
  mappingURI: string = "http://localhost:8082/mappings";

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


}
