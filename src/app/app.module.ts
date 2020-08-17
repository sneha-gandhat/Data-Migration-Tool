import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { UploadFileListComponent } from './upload-file-list/upload-file-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';
import { FileUploadService } from './services/file-upload.service';
import { DatamappingComponent } from './datamapping/datamapping.component';
import { DatamappingWithFileComponent } from './datamapping-with-file/datamapping-with-file.component';
import { MappingPreviewComponent } from './mapping-preview/mapping-preview.component';
import { ModifymappingDialogbodyComponent } from './modifymapping-dialogbody/modifymapping-dialogbody.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadfilesComponent,
    UploadFileListComponent,
    DatamappingComponent,
    DatamappingWithFileComponent,
    MappingPreviewComponent,
    ModifymappingDialogbodyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    AuthModule,
    MatTooltipModule
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
