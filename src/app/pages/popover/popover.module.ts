import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { PopoverinfoComponent } from 'src/app/componentes/popoverinfo/popoverinfo.component';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({

  entryComponents: [ PopoverinfoComponent],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
