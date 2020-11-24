import { FailedObjectInfoService } from './services/failed-object-info.service';
import { UploadFilelistPreviewDialogbodyComponent } from './upload-filelist-preview-dialogbody/upload-filelist-preview-dialogbody.component';
import { ErrorDetailsService } from './services/error-details.service';
import { MonitorService } from './services/monitor.service';
import { LoadModule } from './load/load.module';
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
import { LoadService } from './services/load.service';
import { SegregatorPreviewComponent } from './segregator-preview/segregator-preview.component';
import { ModifyUniquetagsMappingDialogbodyComponent } from './modify-uniquetags-mapping-dialogbody/modify-uniquetags-mapping-dialogbody.component';
import { MappingReportComponent } from './mapping-report/mapping-report.component';
import { IsMandatoryDialogComponent } from './is-mandatory-dialog/is-mandatory-dialog.component';
import { DataCleaningComponent } from './data-cleaning/data-cleaning.component';

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
    UploadFilelistPreviewDialogbodyComponent,
    SegregatorPreviewComponent,
    ModifyUniquetagsMappingDialogbodyComponent,
    MappingReportComponent,
    IsMandatoryDialogComponent,
    DataCleaningComponent

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
    DashboardModule,
    LoadModule

  ],
  providers: [
    FileUploadService,
    SelectValueService,
    TransformService,
    GetMappingIdService,
    MonitorService,
    ErrorDetailsService,
    LoadService,
    FailedObjectInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
