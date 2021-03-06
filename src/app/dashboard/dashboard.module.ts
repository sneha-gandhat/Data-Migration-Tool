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
import { UploadDashboardComponent } from './upload-dashboard/upload-dashboard.component';
import { UploadDrilldownComponent } from './upload-drilldown/upload-drilldown.component';
import { FileErrorTableComponent } from './file-error-table/file-error-table.component';
import { FileerrorPreviewDialogbodyComponent } from './fileerror-preview-dialogbody/fileerror-preview-dialogbody.component';
import { ReprocessDialogbodyComponent } from './reprocess-dialogbody/reprocess-dialogbody.component';

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import { FormsModule } from '@angular/forms';
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
    FileErrorTableComponent,
    FileerrorPreviewDialogbodyComponent,
    ReprocessDialogbodyComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    FusionChartsModule,
    MatTableModule,
    MatSortModule,
    FormsModule
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
    FileErrorTableComponent,
    FileerrorPreviewDialogbodyComponent,
    ReprocessDialogbodyComponent
  ]
})
export class DashboardModule { }
