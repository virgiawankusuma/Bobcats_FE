import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardListRoutingModule } from './card-list-routing.module';

// component
import { CardListComponent } from './card-list.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardAddComponent } from './card-add/card-add.component';

// material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardEditComponent } from './card-edit/card-edit.component';



@NgModule({
  declarations: [
    CardListComponent,
    CardItemComponent,
    CardAddComponent,
    CardDetailComponent,
    CardEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardListRoutingModule,
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
