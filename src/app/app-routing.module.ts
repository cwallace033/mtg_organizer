import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckListComponent } from './components/deck_building/deck-list/deck-list.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardFormComponent } from './components/card-form/card-form.component';

const routes: Routes = [
  { path: 'card-list', component: CardListComponent },
  { path: 'card-form', component: CardFormComponent },
  { path: 'cards', component: CardsPageComponent },
  { path: '', redirectTo: '/card-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
