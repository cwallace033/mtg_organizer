import { Injectable, EventEmitter } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardSelectedEvent = new EventEmitter<Card>();

  private cards: Card[] = [
    new Card('1', 'Lightning Bolt', 'Red', 'Instant', 1, 'Revised'),
    new Card('2', 'Counterspell', 'Blue', 'Instant', 2, 'Ice Age')
  ];

  getCards(): Card[] {
    return this.cards.slice();
  }

  getCard(index: number): Card {
    return this.cards[index];
  }

  addCard(card: Card) {
    this.cards.push(card);
  }

  updateCard(index: number, newCard: Card) {
    this.cards[index] = newCard;
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }

  getCardById(id: string): Card | undefined {
    return this.cards.find(card => card.id === id);
  }

  updateCardById(id: string, updateCard: Card): void {
    const index = this.cards.findIndex(c => c.id === id);
    if (index !== -1) this.cards[index] = updateCard;
  }

  constructor() { }
}
