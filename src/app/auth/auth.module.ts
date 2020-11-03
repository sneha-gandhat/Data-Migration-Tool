import { SettingsComponent } from './components/settings/settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, SettingsComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule
  ],
  //to give access to the components of this module to anyone who uses this
  exports: [
    LoginComponent, RegisterComponent, ProfileComponent, SettingsComponent
  ]
})
export class AuthModule { }
