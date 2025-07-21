import { Routes } from '@angular/router';
import { Property } from './property/property';
import { Auto } from './auto/auto';

export const individualRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'property',
        loadComponent: () =>
          import('./property/property').then((m) => m.Property),
      },
      {
        path: 'auto',
        loadComponent: () => import('./auto/auto').then((m) => m.Auto),
      },
    ],
  },
];
