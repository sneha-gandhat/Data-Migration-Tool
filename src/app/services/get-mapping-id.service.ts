import { Mapping } from './../mapping-preview/mapping';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMappingIdService {

  public invokeEvent: Subject<any> = new Subject();

  //Call getAllMappingDetails() method of MappingPreviewComponent
  callMethodOfMappingPreviewComponent() {
    this.invokeEvent.next("loadMapping");
  }

  //Call closeDialog() method of ModifymappingDialogbodyComponent
  callMethodOfModifymappingDialogbodyComponent() {
    this.invokeEvent.next("closeWindow");
  }
}
