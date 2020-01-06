import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarYrangePage } from './bar-yrange.page';

const routes: Routes = [
  {
    path: '',
    component: BarYrangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarYrangePageRoutingModule {}
