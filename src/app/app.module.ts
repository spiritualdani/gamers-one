import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamersComponent } from './gamers/gamers.component';
import { HttpClientModule } from '@angular/common/http';
import { GamerService } from './servicios/gamer.service'



@NgModule({
  declarations: [
    AppComponent,
    GamersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  exports: [
    HttpClientModule
  ],
  providers: [GamerService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
