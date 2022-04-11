import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { Card1Component } from './cards/card1/card1.component';
import { Card2Component } from './cards/card2/card2.component';

const routes: Routes = [
  {
    path: 'cards/all',
    component:CardsComponent
  },
  {
    path: 'cards/1',
    component:Card1Component
  },
  {
    path: 'cards/2',
    component:Card2Component
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'cards/all'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
