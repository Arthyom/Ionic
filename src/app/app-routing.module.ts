import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  {
    path: "inicio",
    loadChildren: () => import("./pages/inicio/inicio.module").then( m => m.InicioPageModule)
  },
  {
    path: "alert",
    loadChildren: () => import("./pages/alert/alert.module").then( m => m.AlertPageModule)
  },
  {
    path: "action-sheet",
    loadChildren: () => import("./pages/action-sheet/action-sheet.module").then( m => m.ActionSheetPageModule)
  },
  {
    path: "avatar",
    loadChildren: () => import("./pages/avatar/avatar.module").then( m => m.AvatarPageModule)
  },
  {
    path: "buttons",
    loadChildren: () => import("./pages/buttons/buttons.module").then( m => m.ButtonsPageModule)
  },
  {
    path: "card",
    loadChildren: () => import("./pages/card/card.module").then( m => m.CardPageModule)
  },
  {
    path: "check",
    loadChildren: () => import("./pages/check/check.module").then( m => m.CheckPageModule)
  },
  {
    path: "calendar",
    loadChildren: () => import("./pages/calendar/calendar.module").then( m => m.CalendarPageModule)
  },
  {
    path: "fab",
    loadChildren: () => import("./pages/fab/fab.module").then( m => m.FabPageModule)
  },
  {
    path: "grid",
    loadChildren: () => import("./pages/grid/grid.module").then( m => m.GridPageModule)
  },
  {
    path: "infite",
    loadChildren: () => import("./pages/infite/infite.module").then( m => m.InfitePageModule)
  },
  {
    path: "list-slide",
    loadChildren: () => import("./pages/list-slide/list-slide.module").then( m => m.ListSlidePageModule)
  },
  {
    path: "loading",
    loadChildren: () => import("./pages/loading/loading.module").then( m => m.LoadingPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'modal-info',
    loadChildren: () => import('./pages/modal-info/modal-info.module').then( m => m.ModalInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
