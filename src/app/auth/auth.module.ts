import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  //to give access to the components of this module to anyone who uses this
  exports:[
    LoginComponent, RegisterComponent,ProfileComponent
  ]
})
export class AuthModule { }
