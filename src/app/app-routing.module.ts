import { UploadFileListComponent } from './upload-file-list/upload-file-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';

const routes: Routes = [
  {
    path:'upload',
    component:UploadfilesComponent
  },
  {
    path:'transform',
    component:UploadFileListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
