import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { LoadService } from 'src/app/services/load.service';

@Component({
  selector: 'app-loadlanding',
  templateUrl: './loadlanding.component.html',
  styleUrls: ['./loadlanding.component.css']
})
export class LoadlandingComponent implements OnInit {
  serviceURL: string = "";
  connection:boolean=false;
  constructor(private router: Router,private loadService:LoadService) { }
  ngOnInit(): void {  }
  loadSelectFile() {
    this.router.navigate(['load-selectFiles']);
  }
  loadStatus() {
    this.router.navigate(['load-status']);
  }
  verifyEnoviaCon(){
    this.loadService.checkEnoiaConn().subscribe(data=> {
      this.connection=data;
      if(this.connection){
        alert("Connection is Succussfull");
      }else{
        alert("Connection Failed");
      }
    });
  }
}
