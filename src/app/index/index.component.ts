import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 👈 IMPORTAR ESTO

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private router: Router) {} // 👈 AGREGAR ESTO

  // 👇 MÉTODO PARA REDIRIGIR
  goToDashboard() {
    window.location.href = 'http://localhost:4200/dashboard'; // Redirección forzada
    // o si quieres probar con Facebook:
    // window.location.href = 'https://facebook.com';
  }
}