import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { MovieLibraryComponent } from './movie-library.component';

const routes: Routes = [
  { path: 'actor-list', component: ActorListComponent },
  { path: 'movie-list', component: MovieLibraryComponent, children: [
    { path: ':id', component: MovieDetailComponent }
  ]},
  { path: '', redirectTo: 'movie-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MovieLibraryRoutingModule { }
