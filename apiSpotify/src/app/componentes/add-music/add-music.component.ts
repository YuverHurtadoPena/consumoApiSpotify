import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {
  private router: Router;
  private service:ServicioService;
  isEmpty = true;
  track: any[] = [];

  constructor(service:ServicioService,router: Router) {
    this.service=service
    this.router = router;
  }

  ngOnInit(): void {
  }

search(searchName:string){
  if(searchName.trim().length>0){
    this.service.searchMusic(searchName).subscribe({
      next:(data)=>{


        this.track=data.tracks.items;
        if (this.track.length > 0) {
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }

      },
      error:(err)=>{
        Swal.fire('Error!', 'Se debe actualizar el token!', 'error');
      },
    });
  }


}

}
