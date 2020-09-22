import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorDetailsService {
  public invokeEvent: Subject<any> = new Subject();

  constructor() { }

}
