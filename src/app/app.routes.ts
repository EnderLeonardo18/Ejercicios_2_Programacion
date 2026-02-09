import { Routes } from '@angular/router';
import { CryptoDashboardComponent } from './components/crypto-dashboard/crypto-dashboard.component';

export const routes: Routes = [
  { path: '', component: CryptoDashboardComponent }, // Ruta por defecto
  { path: '**', redirectTo: '' } // Redirigir cualquier error a la principal
<<<<<<< HEAD
];
=======
];
>>>>>>> 94d00f1dd38fb08568545fe2d149adce6ce6167a
