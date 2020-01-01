import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InfitePage } from "./infite.page";

const routes: Routes = [
  {
    path: "",
    component: InfitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfitePageRoutingModule {}
