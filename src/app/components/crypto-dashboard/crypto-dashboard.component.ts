import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed,
  effect
} from '@angular/core';

import { CryptoDataService } from '../../core/services/crypto-data.service';
import { CryptoCardComponent } from '../crypto-card/crypto-card.component';

@Component({
  selector: 'app-crypto-dashboard',
  standalone: true,
  imports: [CryptoCardComponent],
  templateUrl: './crypto-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoDashboardComponent {

  private dataService = inject(CryptoDataService);

  // Umbral de alerta
  threshold = signal(65000);

  // Web Worker
  private worker = new Worker(
    new URL('../../app.worker', import.meta.url)
  );

  // Resultado del worker
 readonly stats = signal<{ mean: number; volatility: number } | undefined>(undefined);

  // Lista de cryptos
  readonly cryptos = computed(() =>
    this.dataService.rawPrices()
  );

  constructor() {

    // Escuchar resultados del worker
    this.worker.onmessage = ({ data }) => {
      this.stats.set(data);
    };

    // Mandar historial de BTC al worker
    effect(() => {
      const history = this.dataService.priceHistory()['btc'];

      if (history && history.length >= 10) {
        this.worker.postMessage({
          prices: history,
          windowSize: 10
        });
      }
    });
  }

  updateThreshold(event: Event) {
    const input = event.target as HTMLInputElement;
    this.threshold.set(+input.value);
  }
}



