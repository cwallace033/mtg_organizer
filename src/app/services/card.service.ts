import { Injectable, EventEmitter } from '@angular/core';
import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardSelectedEvent = new EventEmitter<Card>();
  private apiUrl = 'http://localhost:3000/cards';

  constructor(private http: HttpClient) {}

  private cards: Card[] = [
    new Card('1', 'Lightning Bolt', 'Red', 'Instant', 1, 'Revised'),
    new Card('2', 'Counterspell', 'Blue', 'Instant', 2, 'Ice Age')
  ];

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }

  getCard(index: number): Card {
    return this.cards[index];
  }

  addCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.apiUrl, card);
  }

  updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>(`${this.apiUrl}/${card.id}`, card);
  }

  deleteCard(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getCardById(id: string): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}/${id}`); 
  }

  updateCardById(id: string, updateCard: Card): void {
    const index = this.cards.findIndex(c => c.id === id);
    if (index !== -1) this.cards[index] = updateCard;
  }

  
}
