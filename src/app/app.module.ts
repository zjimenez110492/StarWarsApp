import { PeliculasService } from './Servicios/peliculas.service';
import { VerPersonajesComponent } from './Componentes/ver-personajes/ver-personajes.component';
import { VerNavesComponent } from './Componentes/ver-naves/ver-naves.component';
import { ListPeliculasComponent } from './Componentes/list-peliculas/list-peliculas.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';/* 
import {MatDialogRef} from '@angular/material/dialog'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';/* 
import { MatDialogRef } from '@angular/material/dialog/dialog-ref'; */

@NgModule({
  declarations: [
    AppComponent,
    ListPeliculasComponent,
    VerNavesComponent,
    VerPersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,/* 
    MatDialogRef,  */
    MatTableModule,
    HttpClientModule
  ],
  providers: [PeliculasService,HttpClient,VerNavesComponent/* , {provide: MatDialogRef, useValue: {}} */],
  bootstrap: [AppComponent]
})
export class AppModule { }
