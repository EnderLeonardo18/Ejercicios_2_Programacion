import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { HighlightChangeDirective } from '../../shared/directives/highlight-change.directive';

@Component({
  selector: 'app-crypto-card',
  standalone: true,
  imports: [DecimalPipe, HighlightChangeDirective],
  templateUrl: './crypto-card.component.html',
  styleUrl: './crypto-card.component.css'
})
export class CryptoCardComponent {

  @Input() data!: any;
  @Input() threshold!: number;

  // Stats vienen del dashboard (worker)
  @Input() stats?: { volatility: number };
}
