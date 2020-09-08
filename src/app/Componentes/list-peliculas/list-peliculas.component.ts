import { Pelicula } from './../../Modelos/pelicula.model';
import { VerNavesComponent } from './../ver-naves/ver-naves.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { PeliculasService } from 'src/app/Servicios/peliculas.service';
import { MatDialog } from '@angular/material/dialog';
import { VerPersonajesComponent } from '../ver-personajes/ver-personajes.component';



@Component({
  selector: 'app-list-peliculas',
  templateUrl: './list-peliculas.component.html',
  styleUrls: ['./list-peliculas.component.css']
})
export class ListPeliculasComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'director', 'opening', 'productor','opciones'];
  dataSource :Pelicula[];
  peliculas:Pelicula[];

  constructor(private routing: Router, private peliculasService:PeliculasService,private dialog: MatDialog) { }

  ngOnInit() {
    this.peliculas=[];
    this.peliculasService.cargarPeliculas().subscribe(
      resultado=>{
        
        
        for(let i of resultado.results)
        {
          let peli:Pelicula;
          peli=new Pelicula();
          peli.id=i.episode_id;
          peli.director=i.director;
          peli.fecha_lanzamiento=i.created;
          peli.opening=i.opening_crawl;
          peli.productor=i.producer;
          peli.personajes=i.characters;
          this.peliculas.push(peli);
          console.log("Pelicula:  ",peli);
        }          
        this.dataSource=this.peliculas;
      }
      );
  }
  ver(){
    const dialogRef = this.dialog.open(VerPersonajesComponent, {
      width: '800px', height:'500px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
