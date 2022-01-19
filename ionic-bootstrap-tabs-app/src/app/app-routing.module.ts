import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home1',
    loadChildren: () => import('./home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'sidemenu',
    loadChildren: () => import('./sidemenu/sidemenu.module').then( m => m.SidemenuPageModule)
  },
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
