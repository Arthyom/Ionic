import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarYrangePageRoutingModule } from './bar-yrange-routing.module';

import { BarYrangePage } from './bar-yrange.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarYrangePageRoutingModule,
    ComponentsModule
  ],
  declarations: [BarYrangePage]
})
export class BarYrangePageModule {}
