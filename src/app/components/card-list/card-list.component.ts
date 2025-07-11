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
    this.selectedCard.emit(card);
  }

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
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
