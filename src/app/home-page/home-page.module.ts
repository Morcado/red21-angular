import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { NormativaComponent } from './normativa/normativa.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PrincipalComponent } from './principal/principal.component';
import { ServiceMiniCardComponent } from './service-mini-card/service-mini-card.component';
import { DocumentButtonComponent } from './normativa/document-button/document-button.component';


@NgModule({
  declarations: [
    HomePageComponent,
    NormativaComponent,
    AcercaDeComponent,
    PrincipalComponent,
    ServiceMiniCardComponent,
    DocumentButtonComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class HomePageModule { }
