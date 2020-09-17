import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorDetailsService {
  public invokeEvent: Subject<any> = new Subject();

  constructor() { }

  //Call refreshDashboard() method of DashboardComponent - (TransformDashboardComponent/LoadDashboardComponent)
  callMethodOfDashboardComponent() {
    this.invokeEvent.next("loadDashboard");
  }
}
