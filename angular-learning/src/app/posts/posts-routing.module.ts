import { NgModule } from '@angular/core';
import { 
  RouterModule, 
  Routes 
} from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent},
  { path: 'posts/:id', component: PostEditComponent},
  // { path: '', redirectTo: 'posts', pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
