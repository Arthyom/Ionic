import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


const routes: Routes = [

  { path: '', redirectTo: 'Destacados', pathMatch: 'full' },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'Destacados',
        loadChildren: () => import('../destacados/destacados.module').then(m => m.DestacadosPageModule)
      },

      {
        path: 'Categorias',
        loadChildren: () => import('../noticas/noticas.module').then(m => m.NoticasPageModule)
      },

      {
        path: 'Favoritos',
        loadChildren: () => import('../favoritos/favoritos.module').then(m => m.FavoritosPageModule)
      }

    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
