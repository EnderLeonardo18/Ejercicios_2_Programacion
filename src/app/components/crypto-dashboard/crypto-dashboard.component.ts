import { Component, ChangeDetectionStrategy, inject, signal, computed, effect } from '@angular/core';
import { CryptoDataService } from '../../core/services/crypto-data.service';
import { CryptoCardComponent } from '../crypto-card/crypto-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypto-dashboard',
  standalone: true,
  imports: [CryptoCardComponent],
  templateUrl: './crypto-dashboard.component.html',
  styleUrl: './crypto-dashboard.component.css',
  // Requerimiento: Uso obligatorio de Change Detection Strategy OnPush
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'style': 'display: block; flex: 1; width: 100%;'
  }
})
export class CryptoDashboardComponent {

  private dataService = inject(CryptoDataService);
  private router = inject(Router);


  // Umbral de alerta
  threshold = signal(65000);

  // Web Worker
  private worker = new Worker(
    new URL('../../app.worker', import.meta.url)
  );

  // Es Record para guardar stats de múltiples monedas
 readonly stats = signal<Record<string, { mean: number; volatility: number }>>({});

  // Lista de cryptos
  readonly cryptos = computed(() =>
    this.dataService.rawPrices()
  );

  constructor() {



    // Escuchar resultados del worker
    this.worker.onmessage = ({ data }) => {
      if(data){
        this.stats.update(currentStats => ({
          ...currentStats,
          [data.id]: data
        }));

      }
    };

    // Mandar el historial de TODAS las cryptos al worker
    effect(() => {
      const historyRecord = this.dataService.priceHistory();
      const currentCryptos = this.cryptos();

      currentCryptos.forEach(crypto => {
        const history = historyRecord[crypto.id];
        if (history && history.length >= 10) {
         this.worker.postMessage({
           id: crypto.id, // Enviamos el ID
           prices: history,
           windowSize: 10
        });
      }
      } )

    });
  }

  updateThreshold(event: Event) {
    const input = event.target as HTMLInputElement;
    this.threshold.set(+input.value);
  }

  // ✅ NUEVO MÉTODO PARA VOLVER AL INICIO - SOLO ESTO SE AÑADIÓ
  goToIndex() {
    this.router.navigate(['/']);
  }
}
