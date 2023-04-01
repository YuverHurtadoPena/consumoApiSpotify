import { Component, OnInit } from '@angular/core';
import { InfoPlaylist } from 'src/app/dto/info-playlist';
import { BodyPlayList } from 'src/app/dto/body-play-list';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormCreatePlayListComponent } from '../form-create-play-list/form-create-play-list.component';

@Component({
  selector: 'app-listar-play-lists',
  templateUrl: './listar-play-lists.component.html',
  styleUrls: ['./listar-play-lists.component.css']
})
export class ListarPlayListsComponent implements OnInit {
  private router: Router;
  private service:ServicioService;

  private infoPlaylist!:InfoPlaylist;
  bodyPlayList:BodyPlayList[]=[];

  constructor(service:ServicioService,router: Router,public openModal: MatDialog,) {
    this.service=service
    this.router = router;
  }

  ngOnInit(): void {
this.getAllData();


  }
  getAllData() {
    this.service.notifier.subscribe((val)=>{
      if(val){
        this.getPlayLists();
      }

    })
    this.getPlayLists();
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

  goToItems(idPlayList:string){
    localStorage.setItem("idPlayList",idPlayList);

    this.router.navigate(["/items"]);
  }

  openDialog() {
    this.router.navigate(["/principal"]);
    this.openModal.open(FormCreatePlayListComponent, {
      data: {},
      width: '420px',
      height: '310px',
    });
  }
}
