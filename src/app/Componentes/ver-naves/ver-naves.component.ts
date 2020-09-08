import { ListPeliculasComponent } from './../list-peliculas/list-peliculas.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';/* 
import { MatDialogRef } from '@angular/material/dialog/dialog-ref'; */

@Component({
  selector: 'app-ver-naves',
  templateUrl: './ver-naves.component.html',
  styleUrls: ['./ver-naves.component.css']
})
export class VerNavesComponent implements OnInit {

  constructor(private routing:Router/* , public dialogRef: MatDialogRef<VerNavesComponent> */) { }

  ngOnInit() {
  }
  volver()
  {
    this.routing.navigateByUrl('/listar');
  }
  okClick() {/* 
    this.dialogRef.close();  */
  }

}
