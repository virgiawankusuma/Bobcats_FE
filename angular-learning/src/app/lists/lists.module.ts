import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsComponent } from './lists.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListAddComponent } from './list-add/list-add.component';



@NgModule({
  declarations: [
    ListsComponent,
    ListItemComponent,
    ListAddComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListsComponent
  ]
})
export class ListsModule { }