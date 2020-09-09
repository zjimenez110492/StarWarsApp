import { Personaje } from './../../Modelos/personaje.model';
import { PeliculasService } from 'src/app/Servicios/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Pelicula } from 'src/app/Modelos/pelicula.model';
import { Vehiculo } from 'src/app/Modelos/vehiculo.model';
import { Router } from '@angular/router';
import { VerNavesComponent } from '../ver-naves/ver-naves.component';

@Component({
  selector: 'app-ver-personajes',
  templateUrl: './ver-personajes.component.html',
  styleUrls: ['./ver-personajes.component.css']
})
export class VerPersonajesComponent implements OnInit {
  rutaPersonajes:string[]=[];
  displayedColumns: string[] = ['nombre', 'fecha_nacimiento', 'genero', 'peso','altura','opciones'];
  dataSource :Personaje[];
  personajes:Personaje[];
  vehiculos:Vehiculo[]=[];
  constructor( public dialogRef: MatDialogRef<VerPersonajesComponent> ,private routing: Router, private peliculasService:PeliculasService,
    private dialog: MatDialog) { }

  ngOnInit() { 
  }
  ver(rutaVehiculos:string[]){
    console.log("RUTAS VEHICULOS .  ",rutaVehiculos);
    
    for(let i of rutaVehiculos)
    {
      
      this.peliculasService.cargarVehiculo(i).subscribe(
        resultado=>{          
          let v:Vehiculo;  
          v=new Vehiculo();
          v.clase=resultado.vehicle_class;
          v.modelo=resultado.model;
          v.nombre=resultado.name;
          v.num_pasajeros=resultado.passengers;
          v.peliculas=resultado.films;
          
          this.vehiculos.push(v);            
        }
        );
    }
    setTimeout(()=>{  
      this.abrirDialogo(this.vehiculos);
      
    },1000);
   
  }
  abrirDialogo(vehiculos:Vehiculo[])
  {
    
    const dialogRef = this.dialog.open(VerNavesComponent, {
      width: '800px',
      data: {
      }
    });    
      dialogRef.componentInstance.mapearArreglo(vehiculos);
    
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialogo Naves Cerrado');
    });   
  }
  okClick() { 
    this.dialogRef.close(); 
  }
  mapearArreglo(personaje:Personaje[])
  {
    this.dataSource=personaje;
  
  }
}
