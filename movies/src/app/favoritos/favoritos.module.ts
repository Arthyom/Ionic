import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritosPageRoutingModule } from './favoritos-routing.module';

import { FavoritosPage } from './favoritos.page';
import { CompnentsModule } from '../components/compnents/compnents.module';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';

@NgModule({
  entryComponents: [MovieDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosPageRoutingModule,
    CompnentsModule
  ],
  declarations: [FavoritosPage]
})
export class FavoritosPageModule {}
