import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticasPageRoutingModule } from './noticas-routing.module';

import { NoticasPage } from './noticas.page';
import { ComponentesModule } from 'src/app/componentes/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticasPageRoutingModule,
    ComponentesModule
  ],
  declarations: [NoticasPage]
})
export class NoticasPageModule {}
