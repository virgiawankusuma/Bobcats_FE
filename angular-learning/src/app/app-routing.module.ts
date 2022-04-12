import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ListsComponent } from './lists/lists.component';

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
    path:'',
    pathMatch:'full',
    redirectTo:'lists/all'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
