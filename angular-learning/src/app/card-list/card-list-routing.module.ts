import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardEditComponent } from './card-edit/card-edit.component';

const routes: Routes = [
  { path: 'tasks', component:CardListComponent, children: [
    { path: ':id', component: CardDetailComponent },
    { path: ':id/edit', component: CardEditComponent }
  ]},
  { path: '', pathMatch:'full', redirectTo:'tasks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CardListRoutingModule { }
