import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Saveplaylist } from 'src/app/dto/saveplaylist';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { CustomValidators } from 'src/app/util/custom-validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-create-play-list',
  templateUrl: './form-create-play-list.component.html',
  styleUrls: ['./form-create-play-list.component.css']
})
export class FormCreatePlayListComponent implements OnInit {

  private service:ServicioService;



  /*inicio variables para validaciones en el html */
  massaje="El campo es requerido";
  submittedForm = true;
  /*inicio variables para validaciones en el html */

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30),CustomValidators.spaceValidator]),
    description: new FormControl('', [Validators.required,Validators.maxLength(100),CustomValidators.spaceValidator]),
  });

  constructor(service:ServicioService) {
    this.service =service;
   }

  ngOnInit(): void {

  }
  save(){
    this.submittedForm =  false;console.log(this.form.controls.name.value)
    if(this.form.valid){
      const datos:Saveplaylist={
        name:this.form.controls.name.value,
        description:this.form.controls.description.value,
        public:true
      }
      this.service.savePlayList(datos).subscribe({
        next:(data)=>{
          Swal.fire(
            'Exito!',
            'La playlist se creo con exito!',
            'success'
          )

          this.service.notifier.next(true);
        },
        error:(err)=>{
          Swal.fire('Error!', 'Se debe actualizar el token, dar  click en inicio!', 'error');

          console.log(err)
        }
      })
    }
  }

}
