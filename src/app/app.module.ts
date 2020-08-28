import { DashboardModule } from './dashboard/dashboard.module';
import { TransformProgressbarComponent } from './transform-progressbar/transform-progressbar.component';
import { GetMappingIdService } from './services/get-mapping-id.service';
import { TransformService } from './services/transform.service';
import { SegregatorComponent } from './segregator/segregator.component';
import { SelectValueService } from './services/select-value.service';
import { SortListPipe } from './pipes/sort-list.pipe';
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
import { TargetvalueChooserDialogbodyComponent } from './targetvalue-chooser-dialogbody/targetvalue-chooser-dialogbody.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadfilesComponent,
    UploadFileListComponent,
    DatamappingComponent,
    DatamappingWithFileComponent,
    MappingPreviewComponent,
    ModifymappingDialogbodyComponent,
    TargetvalueChooserDialogbodyComponent,
    SegregatorComponent,
    TransformProgressbarComponent,
    SortListPipe,

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
    MatTooltipModule,
    DashboardModule
  ],
  providers: [FileUploadService,SelectValueService,TransformService,GetMappingIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
