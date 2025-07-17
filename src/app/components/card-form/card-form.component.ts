import { Component, Input, Output, OnChanges, SimpleChanges, OnInit, input } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  standalone: false,
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnChanges {
  formCard: Card = { id: '', name: '', color: '', type: '', manaCost: 0, set: ''};
  @Input() card: Card | null = null;

  constructor(private cardService: CardService, private route: ActivatedRoute, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['card'] && this.card) {
      this.formCard = { ...this.card };
    } else {
      this.formCard = { id: '', name: '', color: '', type: '', manaCost: 0, set: '' };
    }
  }

  save() {
    this.cardService.addCard(this.formCard).subscribe(() => {
      this.router.navigate(['/cards']);
    });
  }

  clear() {
    this.formCard = { id: '', name: '', color: '', type: '', manaCost: 0, set: '' };
  }
}



