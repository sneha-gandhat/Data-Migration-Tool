import { MaterialModule } from './../material/material.module';
import { TransformDrilldownComponent } from './transform-drilldown/transform-drilldown.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from "angular-fusioncharts";
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { TransformDashboardComponent } from './transform-dashboard/transform-dashboard.component';

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [
    MainDashboardComponent,
    TransformDrilldownComponent,
    TransformDashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    FusionChartsModule
  ],
  exports: [
    MainDashboardComponent, 
    TransformDrilldownComponent, 
    TransformDashboardComponent,
  ]
})
export class DashboardModule { }
