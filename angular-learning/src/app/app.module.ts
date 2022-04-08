import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CobaModule } from './coba/coba.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CobaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
