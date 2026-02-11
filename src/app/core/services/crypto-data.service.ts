import { Injectable, signal, computed } from '@angular/core';
import { interval } from 'rxjs';

export interface PriceData {
  id: string;
  name: string;
  price: number;
  changePercent: number;

  // Esto lo agrego para agregar el logo de la cripto
  image: string;
}

@Injectable({ providedIn: 'root' })
export class CryptoDataService {
  // Requerimiento: WritableSignal para estado base
  readonly rawPrices = signal<PriceData[]>([
    { id: 'btc', name: 'Bitcoin', price: 60000, changePercent: 0, image: 'imgCripto/Bitcoin-Logo.png' },
    { id: 'eth', name: 'Ethereum', price: 3000, changePercent: 0, image: 'imgCripto/Ethereum-Logo.png' },
    { id: 'sol', name: 'Solana', price: 140, changePercent: 0 , image: 'imgCripto/Solana-Logo.png'},
    { id: 'ada', name: 'Cardano', price: 0.45, changePercent: 0, image: 'imgCripto/Cardano-Logo.png' },
    { id: 'dot', name: 'Polkadot', price: 7, changePercent: 0, image: 'imgCripto/Polkadot-Logo.png' }
  ]);

  // Historial de precios por crypto (para volatilidad)
  readonly priceHistory = signal<Record<string, number[]>>({});

  constructor() {
    // Actualización cada 200ms
    interval(200).subscribe(() => {
      this.rawPrices.update(prices =>
        prices.map(p => {
          const variation = (Math.random() - 0.5) * 10;
          const newPrice = +(p.price + variation).toFixed(2);

          // Guardar historial (últimos 20 valores)
          this.priceHistory.update(history => ({
            ...history,
            [p.id]: [...(history[p.id] ?? []), newPrice].slice(-20)
          }));

          return {
            ...p,
            price: newPrice,
            changePercent: variation
          };
        })
      );
    });
  }
}
