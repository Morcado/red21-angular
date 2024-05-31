import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { CarruselComponent } from './carrusel/carrusel.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
