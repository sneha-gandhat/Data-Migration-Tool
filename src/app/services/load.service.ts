import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TransformationResponse } from '../transform-progressbar/TransformationResponse';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  mappingURI: string = environment.transformationURI;
  
  constructor(private httpclient:HttpClient) { }

  public startLoad(selectedFiles: Array<string>):Observable<TransformationResponse>{
    let params = {"fileName":selectedFiles};
    return this.httpclient.post<TransformationResponse>("http://localhost:8091/load","",{params:params})
  }
  public checkEnoiaConn():any{
    return this.httpclient.get("http://localhost:8091/checkEnoviaConn/");
    
  }
}
