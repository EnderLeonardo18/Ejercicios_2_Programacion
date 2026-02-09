import { Component, Input } from '@angular/core';
<<<<<<< HEAD
import { DecimalPipe } from '@angular/common';
=======
import { DecimalPipe } from '@angular/common'; // Para el error del pipe 'number'
>>>>>>> 94d00f1dd38fb08568545fe2d149adce6ce6167a
import { HighlightChangeDirective } from '../../shared/directives/highlight-change.directive';

@Component({
  selector: 'app-crypto-card',
  standalone: true,
<<<<<<< HEAD
  imports: [DecimalPipe, HighlightChangeDirective],
=======
  imports: [DecimalPipe, HighlightChangeDirective], // Importa lo que usa el HTML
>>>>>>> 94d00f1dd38fb08568545fe2d149adce6ce6167a
  templateUrl: './crypto-card.component.html',
  styleUrl: './crypto-card.component.css'
})
export class CryptoCardComponent {
<<<<<<< HEAD

  @Input() data!: any;
  @Input() threshold!: number;

  // Stats vienen del dashboard (worker)
  @Input() stats?: { volatility: number };
=======
  // Soluciona los errores de "Property data/threshold/stats does not exist"
  @Input() data: any;
  @Input() threshold: number = 0;

  // Stats para evitar el error en el template (se llenaría con el Web Worker)
  stats = { volatility: 0 };
>>>>>>> 94d00f1dd38fb08568545fe2d149adce6ce6167a
}
