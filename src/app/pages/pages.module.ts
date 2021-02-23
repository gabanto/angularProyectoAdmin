import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


//import { ChartsModule } from 'ng2-charts';


//Modulos
import  { FormsModule } from '@angular/forms'; //Para que funcione el [(ngModel)] de los formualrios
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';

//import { DonaComponent } from ''








@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
