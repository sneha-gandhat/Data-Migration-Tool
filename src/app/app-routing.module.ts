import { UploadFileListComponent } from './upload-file-list/upload-file-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { SettingsComponent } from './auth/components/settings/settings.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ProfileComponent } from './auth/components/profile/profile.component';

const routes: Routes = [
  {
    path:'upload',
    component:UploadfilesComponent
  },
  {
    path:'transform',
    component:UploadFileListComponent
  },
  { 
    //to load the login Component as default landing page
    path: '', 
    component: LoginComponent    
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'settings',
    component:SettingsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
