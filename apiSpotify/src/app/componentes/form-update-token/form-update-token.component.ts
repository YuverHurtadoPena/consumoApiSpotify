import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomValidators } from 'src/app/util/custom-validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-update-token',
  templateUrl: './form-update-token.component.html',
  styleUrls: ['./form-update-token.component.css']
})
export class FormUpdateTokenComponent implements OnInit {
    /*inicio variables para validaciones en el html */
    massaje="El campo es requerido";
    submittedForm = true;
    /*inicio variables para validaciones en el html */
    token="";

    form = new FormGroup({
      token: new FormControl('', [Validators.required,CustomValidators.spaceValidator]),

    });

  constructor(  public dialogRef: MatDialogRef<any>,) { }

  ngOnInit(): void {
  }
  save(){
    if (this.form.valid){
      if(this.form.controls.token.value!=null){
        localStorage.setItem("tokenSpotify",this.form.controls.token.value);
        Swal.fire(
          'Exito!',
          'El token se guardo con exito!',
          'success'
        )
        this.dialogRef.close();

      }

    }
  }
  openPageToken(){
    window.open("http://localhost:8888/");
  }

}
