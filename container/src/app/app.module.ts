import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaHostComponent } from './spa-host/spa-host.component';
import { RouteReuseStrategy } from '@angular/router';
import { MicroFrontendRouteReuseStrategy } from 'src/services/route-reuse-strategy';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: MicroFrontendRouteReuseStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
