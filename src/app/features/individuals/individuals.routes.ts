import { Routes } from '@angular/router';
import { Property } from './property/property';
import { Auto } from './auto/auto';

export const individualRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'property', component: Property },
      { path: 'auto', component: Auto },
    ],
  },
];
