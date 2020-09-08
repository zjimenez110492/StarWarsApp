import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-personajes',
  templateUrl: './ver-personajes.component.html',
  styleUrls: ['./ver-personajes.component.css']
})
export class VerPersonajesComponent implements OnInit {

  constructor(/* public dialogRef: MatDialogRef<VerPersonajesComponent> */) { }

  ngOnInit() {
  }
  okClick() {/* 
    this.dialogRef.close(); */
  }
}
