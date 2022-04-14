import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// component
import { CardListComponent } from './card-list.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardAddComponent } from './card-add/card-add.component';

// material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    CardListComponent,
    CardItemComponent,
    CardAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    CardListComponent
  ]
})
export class CardListModule { }
