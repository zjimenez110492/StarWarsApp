import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../Modelos/personaje.model';


@Injectable(
  {providedIn: 'root'}
)
export class PeliculasService{
    private  ruta='https://swapi.dev/api/films/';
    public  personajes:Personaje[];
    constructor(private httpClient:HttpClient)
    {this.personajes=[];

    }
    cargarPeliculas():Observable<any>
    {
        let pelis:any;
        pelis= this.httpClient.get(this.ruta);
        
        return pelis;
    }
    
    cargarPersonaje(ruta:string):Observable<any>
    {
        let personaje:any;
        personaje= this.httpClient.get(ruta);
        
        return personaje;
    }
    cargarVehiculo(ruta:string):Observable<any>
    {
        let vehiculo:any;
        vehiculo= this.httpClient.get(ruta);
        
        return vehiculo;
    }
}