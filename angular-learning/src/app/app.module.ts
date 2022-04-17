import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardListRoutingModule } from './card-list/card-list-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { ListsModule } from './lists/lists.module';
import { CardListModule } from './card-list/card-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardListRoutingModule,
    CardsModule,
    ListsModule,
    CardListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
