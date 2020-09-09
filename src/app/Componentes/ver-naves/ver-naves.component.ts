import { ListPeliculasComponent } from './../list-peliculas/list-peliculas.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Vehiculo } from 'src/app/Modelos/vehiculo.model';
import { Personaje } from 'src/app/Modelos/personaje.model';
import { PeliculasService } from 'src/app/Servicios/peliculas.service';

@Component({
  selector: 'app-ver-naves',
  templateUrl: './ver-naves.component.html',
  styleUrls: ['./ver-naves.component.css']
})
export class VerNavesComponent implements OnInit {
  dataSource: Vehiculo[];

  rutaPersonajes:string[]=[];
  displayedColumns: string[] = ['nombre', 'modelo', 'clase', 'num_pasajeros','peliculas'];
  personajes:Personaje[];
  vehiculos:Vehiculo[]=[];
  constructor( public dialogRef: MatDialogRef<VerNavesComponent> ,private routing: Router, private peliculasService:PeliculasService,
    private dialog: MatDialog) { }
  ngOnInit() {
  }
  volver()
  {
    this.routing.navigateByUrl('/listar');
  }
  
  mapearArreglo(vehiculo:Vehiculo[])
  {
    this.dataSource=vehiculo;
    
  }
  okClick() {
    this.dialogRef.close();  
  }

}
