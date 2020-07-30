import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { UploadFileListComponent } from './upload-file-list/upload-file-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilelistComponent } from './filelist/filelist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { from } from 'rxjs';
import { SearchfilterPipe } from './upload-file-list/searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilelistComponent,
    UploadfilesComponent,
    UploadFileListComponent,
    SearchfilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
