import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilereadService {

  constructor(private http:HttpClient) {
    
   }
   getFiles():Observable<any>{
    return this.http.get("http://jsonplaceholder.typicode.com/users'url");
   }
}
