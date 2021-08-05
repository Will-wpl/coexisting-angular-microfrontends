import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'cip-app',
    children: [{
      path: '**',
      loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
      data: { app: 'cip-app' }
    }]
  },{
  path: 'review-app',
    children: [{
      path: '**',
      loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
      data: { app: 'review-app' }
    }]
  },{
    path: 'main',
    children: [{
      path: '**',
      loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
      data: { app: 'main' }
    }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
