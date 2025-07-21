import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'individuals/products',
    loadChildren: () =>
      import('./features/individuals/individuals.routes').then(
        (m) => m.individualRoutes
      ),
  },
];
