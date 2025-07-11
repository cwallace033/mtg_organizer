import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cards-page',
  standalone: false,
  templateUrl: './cards-page.component.html',
  styleUrl: './cards-page.component.css'
})
export class CardsPageComponent implements OnInit{
  selectedCard: Card | null = null;

  constructor(private CardService: CardService) {}

  ngOnInit(): void {
    this.CardService.cardSelectedEvent.subscribe(
      (card: Card) => this.selectedCard = card
    )
  }

  onCardSelected(card: Card): void {
    this.selectedCard = { ...card};
  }

}
