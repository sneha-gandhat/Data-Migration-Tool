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
    path: 'transform-monitor',
    component: TransformDrilldownComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
