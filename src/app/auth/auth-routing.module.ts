import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { UploadfilesComponent } from '../uploadfiles/uploadfiles.component';

const routes: Routes = [
  {path:'login',  component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'uploadFiles',component:UploadfilesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
