import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
  ],
})
export class MainLayoutModule {}
