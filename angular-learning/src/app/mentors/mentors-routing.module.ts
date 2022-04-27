import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MentorsComponent } from './mentors.component';

const routes: Routes = [
  { path: 'mentors', component: MentorsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MentorsRoutingModule { }
