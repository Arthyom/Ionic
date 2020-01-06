import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'settings'
  },

  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'settings',
        loadChildren: '../avatar/avatar.module#AvatarPageModule'
      },

      {
        path: 'text',
        loadChildren: '../infite/infite.module#InfitePageModule'
      },

      {
        path: 'trophy',
        loadChildren: '../list-slide/list-slide.module#ListSlidePageModule'
      },

      {
        path: 'videocam',
        loadChildren: '../refresher/refresher.module#RefresherPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
