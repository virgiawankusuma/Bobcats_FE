import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostCreateComponent } from './post-create/post-create.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostEditComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }
