import { LoadStatusComponent } from './load/load-status/load-status.component';
import { LoadSelectFilesComponent } from './load/load-select-files/load-select-files.component';
import { LoadlandingComponent } from './load/loadlanding/loadlanding.component';
import { ErrorTableComponent } from './dashboard/error-table/error-table.component';
import { LoadDrilldownComponent } from './dashboard/load-drilldown/load-drilldown.component';
import { MigrationStatusGaugeComponent } from './dashboard/migration-status-gauge/migration-status-gauge.component';
import { TransformDashboardComponent } from './dashboard/transform-dashboard/transform-dashboard.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { TransformDrilldownComponent } from './dashboard/transform-drilldown/transform-drilldown.component';
import { SegregatorComponent } from './segregator/segregator.component';
import { DatamappingWithFileComponent } from './datamapping-with-file/datamapping-with-file.component';
import { DatamappingComponent } from './datamapping/datamapping.component';
import { UploadFileListComponent } from './upload-file-list/upload-file-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { SettingsComponent } from './auth/components/settings/settings.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ProfileComponent } from './auth/components/profile/profile.component';
import { MappingPreviewComponent } from './mapping-preview/mapping-preview.component';
import { TransformProgressbarComponent } from './transform-progressbar/transform-progressbar.component';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { LoadDashboardComponent } from './dashboard/load-dashboard/load-dashboard.component';

const routes: Routes = [
  {
    path: 'upload',
    component: UploadfilesComponent
  },
  {
    path: 'gotoUploadFileList',
    component: UploadFileListComponent
  },
  {
    path: 'transform',
    component: SegregatorComponent
  },
  {
    //to load the login Component as default landing page
    path: '',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'gotoDataMapping',
    component: DatamappingWithFileComponent
  },
  {
    path: 'gotoMappingPreview',
    component: MappingPreviewComponent
  },
  {
    path: 'gotoSegregationWindow',
    component: SegregatorComponent
  },
  {
    path: 'gotoTransformationProgressBar',
    component: TransformProgressbarComponent
  },
  {
    path: 'dashboard',
    component: MainDashboardComponent
  },
  {
    path: 'load-landing',
    component: LoadlandingComponent
  },
  {
    path: 'load-selectFiles',
    component: LoadSelectFilesComponent
  },
  {
    path: 'load-status',
    component: LoadStatusComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
