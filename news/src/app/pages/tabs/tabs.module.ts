import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { NoticasPageModule } from '../noticas/noticas.module';
import { ComponentesModule } from 'src/app/componentes/componentes/componentes.module';
import { DestacadosPageModule } from '../destacados/destacados.module';
import { FavoritosPageModule } from '../favoritos/favoritos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    NoticasPageModule,
    ComponentesModule,
    DestacadosPageModule,
    FavoritosPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
