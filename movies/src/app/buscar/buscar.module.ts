import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPageRoutingModule } from './buscar-routing.module';

import { BuscarPage } from './buscar.page';
import { CompnentsModule } from '../components/compnents/compnents.module';

import { PipesModule } from '../pipes/pipes.module';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';

@NgModule({
  entryComponents: [ MovieDetailsComponent ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPageRoutingModule,
    CompnentsModule,
    PipesModule
  ],
  declarations: [BuscarPage]
})
export class BuscarPageModule {}
