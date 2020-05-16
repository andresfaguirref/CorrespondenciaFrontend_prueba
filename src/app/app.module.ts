import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUMCO001Module } from './cumco001/cumco001.module';
import { CUMCO012Module } from './cumco012/cumco012.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CUMCO001Module,
    CUMCO012Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
