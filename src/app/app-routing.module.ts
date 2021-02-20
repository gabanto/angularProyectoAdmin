import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing'; 
import { AuthRoutingModule } from './auth/auth.routing';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';






//Definir rutas
const routes: Routes=[
  
  //path: '/dashboard' PagesRoutingModule
  //path: '/auth' AuthRoutingModule
  //path: '/medicos' MedicosRoutingModule
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component:NopagefoundComponent } //cuando no se encuentra la pagina

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
