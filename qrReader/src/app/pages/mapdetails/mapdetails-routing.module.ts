import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapdetailsPage } from './mapdetails.page';

const routes: Routes = [
  {
    path: '',
    component: MapdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapdetailsPageRoutingModule {}
