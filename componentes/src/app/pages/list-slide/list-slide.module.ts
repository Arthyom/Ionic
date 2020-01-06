import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ListSlidePageRoutingModule } from "./list-slide-routing.module";

import { ListSlidePage } from "./list-slide.page";
import { ComponentsModule } from "src/app/componentes/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSlidePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListSlidePage]
})
export class ListSlidePageModule {}
