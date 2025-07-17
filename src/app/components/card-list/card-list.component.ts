import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit, OnDestroy {
  cards: Card[] = [];
  term: string = '';

  @Output() selectedCard = new EventEmitter<Card>();

  onCardSelected(card: Card) {
    console.log('Card selected from list:', card);
    this.cardService.cardSelectedEvent.emit(card);
  }

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards;
    });
  }


  onSelect(card: Card): void {
    this.cardService.cardSelectedEvent.emit(card);
  }
  ngOnDestroy(): void {
    
  }

  search(value: string) {
    this.term = value;
  }
}
