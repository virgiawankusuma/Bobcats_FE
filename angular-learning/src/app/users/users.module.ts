import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule,TranslateLoader} from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// component
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

// material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {NavbarComponent } from './navbar/navbar.component';
import { NoSymbolPipe } from './no-symbol.pipe';
import { NoSpacingPipe } from './no-spacing.pipe';
import { NoAccentPipe } from './no-accent.pipe';
import { FilterPipe } from './filter.pipe';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    NavbarComponent,
    NoSymbolPipe,
    NoSpacingPipe,
    NoAccentPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    MatCardModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule
  ],
  exports:[
    UsersComponent,
  ]
})
export class UsersModule { }
