import { Component, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card-form',
  standalone: false,
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnChanges {
  @Input() card: Card | null = null;

  formCard: Card = { id: '', name: '', color: '', type: '', manaCost: 0, set: ''};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['card'] && this.card) {
      this.formCard = { ...this.card};
      
    } else {
      this.formCard = { id:'', name: '', color: '', type: '', manaCost: 0, set: ''};
    }
  }

  save() {
    // add CRUD stuff
  }

  clear() {
    this.formCard = { id:'', name: '', color: '', type: '', manaCost: 0, set: ''};
  }


}
