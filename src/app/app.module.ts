import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardListComponent } from './components/cards/card-list/card-list.component';
import { CardFormComponent } from './components/cards/card-form/card-form.component';
import { DeckListComponent } from './components/deck_building/deck-list/deck-list.component';
import { DeckFormComponent } from './components/deck_building/deck-form/deck-form.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { FormsModule } from '@angular/forms';
import { CardItemComponent } from './components/card-item/card-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    CardFormComponent,
    DeckListComponent,
    DeckFormComponent,
    CardsPageComponent,
    CardItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
