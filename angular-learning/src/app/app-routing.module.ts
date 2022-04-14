import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ListsComponent } from './lists/lists.component';
import { CardListComponent } from './card-list/card-list.component';

const routes: Routes = [
  {
    path: 'cards/all',
    component:CardsComponent
  },
  {
    path: 'lists/all',
    component:ListsComponent
  },
  {
    path: 'card-list',
    component:CardListComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'card-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
