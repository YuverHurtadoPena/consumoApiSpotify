import { Album } from './../../dto/album';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ServicioService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';
import { ReproducirCancionComponent } from '../reproducir-cancion/reproducir-cancion.component';
import { BoryAddItem } from 'src/app/dto/bory-add-item';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css'],
})
export class ListitemsComponent implements OnInit {
  private service: ServicioService;

  track: any[] = [];
  dat:string[]=[];

  idPlayList = '';
  limitInit = 0;
  limitEnd = 50;
  isEmpty = false;

  constructor(service: ServicioService,public openModal: MatDialog) {
    this.service = service;
  }

  ngOnInit(): void {
    this.getItems();

  }
  openDialog(audio:string, cancion:string, album:string,imagen:string) {
    this.openModal.open(ReproducirCancionComponent, {
      data: {
        audio:audio,
        cancion:cancion,
        album:album,
        imagen:imagen
      },
      width: '600px',


    });
  }

  delete(uri:string){
    const id = localStorage.getItem('idPlayList');
    Swal.fire({
      title: 'desea eliminar la cancion?',
      text: "Tenga presente que esta acción no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eleiminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dat.push(uri)
        const dato:BoryAddItem ={
          uris:this.dat
        }
       this.service.deleteItem(id, dato).subscribe({
        next:(data)=>{
          this.getItems();
          Swal.fire(
            'Exito!',
            'La cancion se elimino con exito!',
            'success'
          )
        },
        error:(err)=>{
          Swal.fire('Error!', 'Se debe actualizar el token, dar  click en inicio!', 'error');
        }

       })
      }
    })
  }

  getItems() {
    const id = localStorage.getItem('idPlayList');
    this.service.getItems(this.limitInit, this.limitEnd, id).subscribe({
      next: (data) => {
        this.track = data.items;
        console.log(this.track);
        if (this.track.length > 0) {
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }

      },
      error: (err) => {
        Swal.fire('Error!', 'Se debe actualizar el token!', 'error');
      },
    });
  }
}
