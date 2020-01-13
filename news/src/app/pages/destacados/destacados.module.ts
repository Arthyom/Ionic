import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestacadosPageRoutingModule } from './destacados-routing.module';

import { DestacadosPage } from './destacados.page';
import { ComponentesModule } from 'src/app/componentes/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestacadosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DestacadosPage]
})
export class DestacadosPageModule {}
