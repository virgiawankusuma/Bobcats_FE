import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
  {
    path: 'tasks',
    component:CardListComponent
  },
  {
    path: 'tasks/:id',
    component:CardDetailComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'tasks'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CardListRoutingModule { }
