import { Pelicula } from './../../Modelos/pelicula.model';
import { VerNavesComponent } from './../ver-naves/ver-naves.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { PeliculasService } from 'src/app/Servicios/peliculas.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-list-peliculas',
  templateUrl: './list-peliculas.component.html',
  styleUrls: ['./list-peliculas.component.css']
})
export class ListPeliculasComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'director', 'opening', 'productor'];
  dataSource :Pelicula[];
  peliculas:Pelicula[];

  constructor(private routing: Router, private peliculasService:PeliculasService) { }

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
          this.peliculas.push(peli);
        }          
        this.dataSource=this.peliculas;
      }
      );
  }
  ver(){
  this.routing.navigateByUrl('/ver');
  }

}
