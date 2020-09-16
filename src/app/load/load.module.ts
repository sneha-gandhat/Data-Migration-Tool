import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadlandingComponent } from './loadlanding/loadlanding.component';
import { LoadSelectFilesComponent } from './load-select-files/load-select-files.component';
import { LoadStatusComponent } from './load-status/load-status.component';
import { FormsModule } from '@angular/forms';
//import { DivloadStatusComponent } from './divload-status/divload-status.component';

@NgModule({
  declarations: [LoadlandingComponent,
    LoadSelectFilesComponent,
    LoadStatusComponent,
    //DivloadStatusComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule

  ],  
  exports: [LoadlandingComponent,
    LoadSelectFilesComponent]
})
export class LoadModule { }
