import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { InfitePageRoutingModule } from "./infite-routing.module";

import { InfitePage } from "./infite.page";
import { ComponentsModule } from "src/app/componentes/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfitePageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfitePage]
})
export class InfitePageModule {}
