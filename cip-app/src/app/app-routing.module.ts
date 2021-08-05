import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { 
  path: 'cip-app',
  children: [
    /**
     * All routes specific to this app go here.
     */
    {
      path: 'dashboard',
      component: HeroesComponent
    }, {
     path: 'detail/:id',
     component: HeroDetailComponent
    }]
  },
  { path: '**', component: EmptyRouteComponent }
  // { path: '', redirectTo: '/cip-app/dashboard', pathMatch: 'full' },
  // { path: 'cip-app/detail/:id', component: HeroDetailComponent },
  // { path: 'cip-app/dashboard', component: HeroesComponent },
  // { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
