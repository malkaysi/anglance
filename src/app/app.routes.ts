import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { PageComponent } from './component/page/page';
import { ArticleComponent } from './features/article/article';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'individuals/products',
    loadChildren: () =>
      import('./features/individuals/individuals.routes').then(
        (m) => m.individualRoutes
      ),
  },
  {
    path: 'articles',
    component: ArticleComponent,
  },
  {
    path: ':slug',
    component: PageComponent,
  },
];
