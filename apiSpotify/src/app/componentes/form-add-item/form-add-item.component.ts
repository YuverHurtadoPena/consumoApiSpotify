import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddMusicComponent } from '../add-music/add-music.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/util/custom-validators';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { BodyPlayList } from 'src/app/dto/body-play-list';
import { InfoPlaylist } from 'src/app/dto/info-playlist';
import { BoryAddItem } from 'src/app/dto/bory-add-item';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-add-item',
  templateUrl: './form-add-item.component.html',
  styleUrls: ['./form-add-item.component.css'],
})
export class FormAddItemComponent implements OnInit {
  /*inicio variables para validaciones en el html */
  massaje = 'El campo es requerido';
  submittedForm = true;
  /*inicio variables para validaciones en el html */
  bodyPlayList:BodyPlayList[]=[];
  private infoPlaylist!:InfoPlaylist;
  dat:string[]=[];

  private router: Router;
  private service: ServicioService;

  form = new FormGroup({
    idPlayList: new FormControl('', [
      Validators.required,
      CustomValidators.spaceValidator,
    ]),
  });

  constructor(
    public dialogRef: MatDialogRef<AddMusicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    service: ServicioService,
    router: Router
  ) {
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
    this.getPlayLists();
  }

  save() {
    this.submittedForm = false;
    if(this.form.valid){
      this.dat.push(this.data.uri)
      const dato:BoryAddItem ={
        uris:this.dat
      }


      this.service.saveItem(this.form.controls.idPlayList.value,dato).subscribe({
        next:(data)=>{
          Swal.fire(
            'Exito!',
            'La cancion de agrego con exito!',
            'success'
          )

          this.service.notifier.next(true);
        },

        error:(err)=>{
          console.log(err)
          Swal.fire('Error!', 'Se debe actualizar el token, dar  click en inicio!', 'error');
        }
      })
    }
  }

  getPlayLists(){
    this.service.getPlayLists().subscribe({
      next:(data)=>{
        console.log( data)
        this.infoPlaylist = data;

        this.bodyPlayList = this.infoPlaylist.items
        console.log(   this.bodyPlayList )


      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
