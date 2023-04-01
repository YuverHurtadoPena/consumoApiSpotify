import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListitemsComponent } from './componentes/listitems/listitems.component';
import { ListarPlayListsComponent } from './componentes/listar-play-lists/listar-play-lists.component';
import { AddMusicComponent } from './componentes/add-music/add-music.component';

const routes: Routes = [
  { path: 'items', component: ListitemsComponent },
  { path: 'principal', component: ListarPlayListsComponent },
  { path: 'agregar-musica', component: AddMusicComponent },
  {
    path: '**',
    redirectTo: 'principal',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
