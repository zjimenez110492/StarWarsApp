import { PeliculasService } from 'src/app/Servicios/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Pelicula } from 'src/app/Modelos/pelicula.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-personajes',
  templateUrl: './ver-personajes.component.html',
  styleUrls: ['./ver-personajes.component.css']
})
export class VerPersonajesComponent implements OnInit {
  rutaPersonajes:String[]=[];
  displayedColumns: string[] = ['fecha', 'director', 'opening', 'productor','opciones'];
  dataSource :Pelicula[];
  peliculas:Pelicula[];
  constructor( public dialogRef: MatDialogRef<VerPersonajesComponent> ,private routing: Router, private peliculasService:PeliculasService,
    private dialog: MatDialog) { }

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
      width: '800px',height:'1000px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  okClick() { 
    this.dialogRef.close(); 
  }
}
