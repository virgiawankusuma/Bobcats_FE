import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieLibraryRoutingModule } from './movie-library-routing.module';

import { MovieLibraryComponent } from './movie-library.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorListComponent } from './actor-list/actor-list.component';

// angular material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    MovieLibraryComponent,
    MovieListComponent,
    MovieDetailComponent,
    ActorListComponent
  ],
  imports: [
    CommonModule,
    MovieLibraryRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatListModule,
    MatSidenavModule
  ],
  exports: [
    MovieLibraryComponent,
  ]
})
export class MovieLibraryModule { }
