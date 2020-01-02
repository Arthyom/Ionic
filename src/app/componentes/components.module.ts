import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { IonicModule, PopoverController } from "@ionic/angular";
import { MenuComponent } from "./menu/menu.component";
import { RouterModule } from '@angular/router';
import { PopoverinfoComponent } from './popoverinfo/popoverinfo.component';


@NgModule({

  declarations: [HeaderComponent, MenuComponent, PopoverinfoComponent],

  exports: [HeaderComponent, MenuComponent, PopoverinfoComponent],

  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
