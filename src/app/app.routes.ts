import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Property } from './features/individuals/property/property';
import { Auto } from './features/individuals/auto/auto';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'individuals/products',
    children: [
      { path: 'property', component: Property },
      { path: 'auto', component: Auto },
    ],
  },
];
