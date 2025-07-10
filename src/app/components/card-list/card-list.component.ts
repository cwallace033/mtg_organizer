import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit, OnDestroy {
  term: string = '';
  constructor() {} 

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  search(value: string) {
    this.term = value;
  }
}
