import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapdetailsPageRoutingModule } from './mapdetails-routing.module';

import { MapdetailsPage } from './mapdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapdetailsPageRoutingModule
  ],
  declarations: [MapdetailsPage]
})
export class MapdetailsPageModule {}
