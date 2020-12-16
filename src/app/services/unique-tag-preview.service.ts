import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniqueTagPreviewService {
  constructor(private httpclient: HttpClient) { }

   public getPreview(): Observable<any> {
    return this.httpclient.get("http://localhost:8089/getSegregationPreview");
  }
  

  public modifyUniqueTag(adminType:any,sourceValue:any, id:any){    
  this.httpclient.post("http://localhost:8089/mappings/modifySegregationTag?adminType=" + adminType + 
  "&sourceValue=" + sourceValue +"&id="+id,"").subscribe(response => {
    console.log(response);
  }, err => {
    console.log(err.message);
  }, () => {
    console.log('completed');
  }
  );
  }

  public DeleteSegregationTag(id:any){        
    this.httpclient.post("http://localhost:8089/mappings/deleteSegregationTag?id="+id,"").subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('completed');
    }
    );

  }
}
