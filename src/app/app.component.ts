import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Añade esto
import { CryptoDashboardComponent } from './components/crypto-dashboard/crypto-dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que sea standalone
  imports: [RouterOutlet, FooterComponent], // Añadimos los componentes necesarios
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crypto-monitor';

  // constructor() {
  //   // Tu código existente de Web Workers se mantiene igual
  //   if (typeof Worker !== 'undefined') {
  //     const worker = new Worker(new URL('./app.worker', import.meta.url));
  //     worker.onmessage = ({ data }) => {
  //       console.log(`page got message: ${data}`);
  //     };
  //     worker.postMessage('hello');
  //   }
  // }
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
