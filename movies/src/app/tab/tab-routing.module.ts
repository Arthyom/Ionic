import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },

      {
        path: 'buscar',
        loadChildren: () => import('../buscar/buscar.module').then( m => m.BuscarPageModule)
      },

      {
        path: 'favoritos',
        loadChildren: () => import('../favoritos/favoritos.module').then( m => m.FavoritosPageModule)
      }

    

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
