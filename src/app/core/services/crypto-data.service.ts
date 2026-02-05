import { Injectable, signal, computed } from '@angular/core';
import { interval } from 'rxjs';

export interface PriceData {
  id: string;
  name: string;
  price: number;
  changePercent: number;
}

@Injectable({ providedIn: 'root' })
export class CryptoDataService {
  // Requerimiento: WritableSignal para estado base [cite: 9, 22]
  readonly rawPrices = signal<PriceData[]>([
    { id: 'btc', name: 'Bitcoin', price: 60000, changePercent: 0 },
    { id: 'eth', name: 'Ethereum', price: 3000, changePercent: 0 },
    { id: 'sol', name: 'Solana', price: 140, changePercent: 0 },
    { id: 'ada', name: 'Cardano', price: 0.45, changePercent: 0 },
    { id: 'dot', name: 'Polkadot', price: 7, changePercent: 0 }
  ]);

  constructor() {
    // Requerimiento: Actualización cada 200ms [cite: 4, 14]
    interval(200).subscribe(() => {
      this.rawPrices.update(prices => prices.map(p => {
        const variation = (Math.random() - 0.5) * 10;
        return { ...p, price: +(p.price + variation).toFixed(2), changePercent: variation };
      }));
    });
  }
}
