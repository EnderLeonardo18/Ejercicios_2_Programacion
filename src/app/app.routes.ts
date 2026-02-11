import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component'; // Tu landing page
import { CryptoDashboardComponent } from './components/crypto-dashboard/crypto-dashboard.component'; // Tu dashboard

export const routes: Routes = [
  { path: '', component: IndexComponent }, // Landing page
  { path: 'dashboard', component: CryptoDashboardComponent }, // Tu dashboard
  { path: '**', redirectTo: '' } // Redirigir cualquier error al landing
];