import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule} from "@angular/common/http";
import { ListarPlayListsComponent } from './componentes/listar-play-lists/listar-play-lists.component';
import { FormCreatePlayListComponent } from './componentes/form-create-play-list/form-create-play-list.component';
import { HeaderComponent } from './componentes/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { ListitemsComponent } from './componentes/listitems/listitems.component';
import { ReproducirCancionComponent } from './componentes/reproducir-cancion/reproducir-cancion.component';
import { AddMusicComponent } from './componentes/add-music/add-music.component';
import { FormAddItemComponent } from './componentes/form-add-item/form-add-item.component';
import { FormUpdateTokenComponent } from './componentes/form-update-token/form-update-token.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPlayListsComponent,
    FormCreatePlayListComponent,
    HeaderComponent,
    ListitemsComponent,
    ReproducirCancionComponent,
    AddMusicComponent,
    FormAddItemComponent,
    FormUpdateTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
