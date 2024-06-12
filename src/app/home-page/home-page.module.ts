import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { NormativaComponent } from './normativa/normativa.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PrincipalComponent } from './principal/principal.component';
import { DocumentButtonComponent } from './normativa/document-button/document-button.component';
import { PlanesInternetComponent } from './planes-internet/planes-internet.component';
import { DatosPlanComponent } from './planes-internet/datos-plan/datos-plan.component';


@NgModule({
  declarations: [
    HomePageComponent,
    NormativaComponent,
    AcercaDeComponent,
    PrincipalComponent,
    DocumentButtonComponent,
    PlanesInternetComponent,
    DatosPlanComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class HomePageModule { }
