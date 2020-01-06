import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticasPage } from './noticas.page';

const routes: Routes = [
  {
    path: '',
    component: NoticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticasPageRoutingModule {}
