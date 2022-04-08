import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardTextModule } from '../card-text/card-text.module';

import { Coba1Component } from './coba1.component';
import { Coba2Component } from './coba2.component';
import { Coba3Component } from './coba3.component';
import { Coba4Component } from './coba4.component';
import { Coba5Component } from './coba5.component';
import { Coba6Component } from './coba6.component';

@NgModule({
  declarations: [
    Coba1Component,
    Coba2Component,
    Coba3Component,
    Coba4Component,
    Coba5Component,
    Coba6Component
  ],
  imports: [
    BrowserModule,
    CardTextModule
  ],
  exports:[
    Coba1Component,
    Coba2Component,
    Coba3Component,
    Coba4Component,
    Coba5Component,
    Coba6Component
  ]
})
export class CobaModule { }
