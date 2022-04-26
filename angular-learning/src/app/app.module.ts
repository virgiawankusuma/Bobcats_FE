import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersRoutingModule } from './users/users-routing.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PostsRoutingModule } from './posts/posts-routing.module';
import { MovieLibraryModule } from './movie-library/movie-library.module';
import { MovieLibraryRoutingModule } from './movie-library/movie-library-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UsersRoutingModule,
    UsersModule,
    PostsModule,
    PostsRoutingModule,
    MovieLibraryModule,
    MovieLibraryRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
