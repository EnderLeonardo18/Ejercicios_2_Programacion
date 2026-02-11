import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common'; // Para el error del pipe 'number'
import { HighlightChangeDirective } from '../../shared/directives/highlight-change.directive';



@Component({
  selector: 'app-crypto-card',
  standalone: true,
  imports: [DecimalPipe, HighlightChangeDirective], // Importa lo que usa el HTML
  templateUrl: './crypto-card.component.html',
  styleUrl: './crypto-card.component.css'
})
export class CryptoCardComponent {
  // Soluciona los errores de "Property data/threshold/stats does not exist"
  @Input() data!: any;
  @Input() threshold!: number;

  // Stats para evitar el error en el template (se llenaría con el Web Worker)
  @Input() stats?: { volatility: number };
}
