import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectValueService {

  //Define the subject for selected value
  subject = new Subject<string>();

  //Define the subject for list of values (Source/Target List)
  public invokeEvent: Subject<any> = new Subject();
  isSource: boolean = true;

  constructor() { }

  // Set selected value
  setValue(selectedTargetValue: string) {
    this.subject.next(selectedTargetValue);
  }

  // Get selected value
  getValue(): Observable<string> {
    return this.subject.asObservable();
  }

}
