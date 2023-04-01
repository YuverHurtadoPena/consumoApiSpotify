import { Album } from './../../dto/album';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ServicioService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';
import { ReproducirCancionComponent } from '../reproducir-cancion/reproducir-cancion.component';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css'],
})
export class ListitemsComponent implements OnInit {
  private service: ServicioService;

  track: any[] = [];

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
