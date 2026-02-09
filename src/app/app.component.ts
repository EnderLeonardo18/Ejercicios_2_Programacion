import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
=======
import { RouterOutlet } from '@angular/router'; // Añade esto
import { CryptoDashboardComponent } from './components/crypto-dashboard/crypto-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que sea standalone
  imports: [RouterOutlet], // Añadimos los componentes necesarios
>>>>>>> 94d00f1dd38fb08568545fe2d149adce6ce6167a
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crypto-monitor';
<<<<<<< HEAD
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
=======

  constructor() {
    // Tu código existente de Web Workers se mantiene igual
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
    }
  }
}
>>>>>>> 94d00f1dd38fb08568545fe2d149adce6ce6167a
