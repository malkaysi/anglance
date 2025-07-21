import { Routes } from '@angular/router';

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
