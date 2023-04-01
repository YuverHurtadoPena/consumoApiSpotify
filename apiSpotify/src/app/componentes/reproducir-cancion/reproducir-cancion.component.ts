import { Component, OnInit,Inject, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListitemsComponent } from '../listitems/listitems.component';

@Component({
  selector: 'app-reproducir-cancion',
  templateUrl: './reproducir-cancion.component.html',
  styleUrls: ['./reproducir-cancion.component.css']
})
export class ReproducirCancionComponent implements OnInit {


  constructor( public dialogRef: MatDialogRef<ListitemsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    console.log(this.data)
  }


}
