import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'Compartir',
    loadChildren: () => import('../noticas/noticas.module').then(m => m.NoticasPageModule)
   },

  {
    path: '',
    component: TabsPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
