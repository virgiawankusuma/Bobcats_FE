import { NgModule } from '@angular/core';
import { 
  RouterModule,
  Routes 
} from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersComponent } from './users.component';


const routes: Routes = [
  { path: 'posts', component: PostsComponent},
  { path: 'users/create', component: UserCreateComponent},
  { path: 'users', component: UsersComponent, children:[
    { path: ':id', component: UserDetailComponent},
    { path: ':id/edit', component: UserEditComponent}
  ]},
  // { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
