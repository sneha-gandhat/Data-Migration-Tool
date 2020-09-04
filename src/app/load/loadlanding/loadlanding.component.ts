import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-loadlanding',
  templateUrl: './loadlanding.component.html',
  styleUrls: ['./loadlanding.component.css']
})
export class LoadlandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {  }
  
  loadSelectFile() {
    this.router.navigate(['load-selectFiles']);
  }

  loadStatus() {
    this.router.navigate(['load-status']);
  }

}
