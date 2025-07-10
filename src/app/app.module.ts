import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardListComponent } from './components/cards/card-list/card-list.component';
import { CardFormComponent } from './components/cards/card-form/card-form.component';
import { DeskListComponent } from './components/deck_building/desk-list/desk-list.component';
import { DeskFormComponent } from './components/deck_building/desk-form/desk-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    CardFormComponent,
    DeskListComponent,
    DeskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
