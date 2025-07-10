import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardListComponent } from './components/cards/card-list/card-list.component';
import { CardFormComponent } from './components/cards/card-form/card-form.component';
import { DeckListComponent } from './components/deck_building/deck-list/deck-list.component';
import { DeckFormComponent } from './components/deck_building/deck-form/deck-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    CardFormComponent,
    DeckListComponent,
    DeckFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
