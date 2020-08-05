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

@NgModule({
  declarations: [
    AppComponent,
    UploadfilesComponent,
    UploadFileListComponent,

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
    AuthModule
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
