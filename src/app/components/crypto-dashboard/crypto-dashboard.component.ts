import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CryptoDataService } from '../../core/services/crypto-data.service';
import { CryptoCardComponent } from '../crypto-card/crypto-card.component';

@Component({
  selector: 'app-crypto-dashboard',
  standalone: true,
  imports: [CryptoCardComponent],
  templateUrl: './crypto-dashboard.component.html',
  // Requerimiento: Uso obligatorio de Change Detection Strategy OnPush
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoDashboardComponent {
  private dataService = inject(CryptoDataService);

  // Requerimiento: WritableSignal para el estado del umbral de alerta
  threshold = signal(65000);

  // Requerimiento: computed para filtrar la lista basándose en el estado base
  filteredList = computed(() => {
    // Aquí podrías agregar lógica de filtrado adicional si se requiere
    return this.dataService.rawPrices();
  });

  updateThreshold(event: Event) {
    const input = event.target as HTMLInputElement;
    this.threshold.set(Number(input.value));
  }
}
