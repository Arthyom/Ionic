import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListSlidePage } from "./list-slide.page";

const routes: Routes = [
  {
    path: "",
    component: ListSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSlidePageRoutingModule {}
