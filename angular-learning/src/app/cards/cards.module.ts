import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsComponent } from './cards.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';



@NgModule({
  declarations: [
    CardsComponent,
    Card1Component,
    Card2Component
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardsComponent,
    Card1Component,
    Card2Component
  ]
})
export class CardsModule { }
