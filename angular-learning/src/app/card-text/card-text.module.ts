import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardTextComponent } from './card-text.component';
import { CardTextModule } from './card-text/card-text.module';

@NgModule({
  declarations: [
    CardTextComponent
  ],
  imports: [
    BrowserModule
    CardTextModule
  ],
  exports:[
    CardTextComponent
  ]
})
export class CardTextModule { }
