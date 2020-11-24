import { DataCleaningComponent } from './data-cleaning/data-cleaning.component';
import { MappingReportComponent } from './mapping-report/mapping-report.component';
import { HomeComponent } from './home/home.component';
import { LoadStatusComponent } from './load/load-status/load-status.component';
import { LoadSelectFilesComponent } from './load/load-select-files/load-select-files.component';
import { LoadlandingComponent } from './load/loadlanding/loadlanding.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { SegregatorComponent } from './segregator/segregator.component';
import { DatamappingWithFileComponent } from './datamapping-with-file/datamapping-with-file.component';
import { UploadFileListComponent } from './upload-file-list/upload-file-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { SettingsComponent } from './auth/components/settings/settings.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ProfileComponent } from './auth/components/profile/profile.component';
import { MappingPreviewComponent } from './mapping-preview/mapping-preview.component';
import { TransformProgressbarComponent } from './transform-progressbar/transform-progressbar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'upload',
    component: UploadfilesComponent
  },
  {
    path: 'transform',
    component: DatamappingWithFileComponent
  },
  {
    path: 'gotoTransformation',
    component: DatamappingWithFileComponent
  },
  {
    path: 'gotoDataMapping',
    component: DatamappingWithFileComponent
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
    path: 'gotoMappingPreview',
    component: MappingPreviewComponent
  },
  {
    path: 'MappingReport',
    component: MappingReportComponent
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
  {
    path: 'data-cleaning',
    component: DataCleaningComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
