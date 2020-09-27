import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FailedObjectInfoService {
  public invokeEvent: Subject<any> = new Subject();

  constructor() { }
}
