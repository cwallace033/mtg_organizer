import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-item',
  standalone: false,
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {

  @Input() card!: Card;
  @Output() cardSelected = new EventEmitter<void>(); 

  onSelect() {
    this.cardSelected.emit();
  }
}
