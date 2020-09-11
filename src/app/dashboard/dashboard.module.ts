import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from './../material/material.module';
import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from "angular-fusioncharts";
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { TransformDrilldownComponent } from './transform-drilldown/transform-drilldown.component';
import { TransformDashboardComponent } from './transform-dashboard/transform-dashboard.component';
import { MigrationStatusGaugeComponent } from './migration-status-gauge/migration-status-gauge.component';
import { LoadDrilldownComponent } from './load-drilldown/load-drilldown.component';
import { ErrorTableComponent } from './error-table/error-table.component';
import { LoadDashboardComponent } from './load-dashboard/load-dashboard.component'
import { ErrorPreviewDialogbodyComponent } from './error-preview-dialogbody/error-preview-dialogbody.component';

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import { UploadDashboardComponent } from './upload-dashboard/upload-dashboard.component';
import { UploadDrilldownComponent } from './upload-drilldown/upload-drilldown.component';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme, Widgets);

@NgModule({
  declarations: [
    MainDashboardComponent,
    TransformDrilldownComponent,
    TransformDashboardComponent,
    MigrationStatusGaugeComponent,
    LoadDrilldownComponent,
    LoadDashboardComponent,
    ErrorTableComponent,
    ErrorPreviewDialogbodyComponent,
	 UploadDashboardComponent,
    UploadDrilldownComponent,						 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    FusionChartsModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    MainDashboardComponent,
    TransformDrilldownComponent,
    TransformDashboardComponent,
    MigrationStatusGaugeComponent,
    LoadDrilldownComponent,
    LoadDashboardComponent,
    ErrorTableComponent,
    ErrorPreviewDialogbodyComponent,							 
    UploadDashboardComponent,
    UploadDrilldownComponent,						 
  ]
})
export class DashboardModule { }
