import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginComponent } from '../../pages/login/login.component';

@NgModule({
  declarations: [
  ],
  imports: [
    LoginComponent,
    AuthLayoutComponent,
    CommonModule,
    AuthLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
  ],
})
export class AuthLayoutModule {}
