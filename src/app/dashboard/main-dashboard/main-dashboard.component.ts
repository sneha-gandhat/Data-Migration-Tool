import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  tabIndex: number;
  errorCategory: string;
  transformError: string = "transformError";
  loadError: string = "loadError";

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  onTabClick(index) {
    this.tabIndex = index;
  }
}
