import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CheckPageRoutingModule } from "./check-routing.module";

import { CheckPage } from "./check.page";

import { ComponentsModule } from "../../componentes/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonModule,
    CheckPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CheckPage]
})
export class CheckPageModule {}
