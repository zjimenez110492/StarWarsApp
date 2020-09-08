import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable(
  {providedIn: 'root'}
)
export class PeliculasService{
    private  ruta='https://swapi.dev/api/films/';
    constructor(private httpClient:HttpClient)
    {

    }
    cargarPeliculas():Observable<any>
    {
        let pelis:any;
        pelis= this.httpClient.get(this.ruta);
        
        return pelis;
    }
}