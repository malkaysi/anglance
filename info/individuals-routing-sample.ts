const routes: Routes = [
  { path: '', component: IndividualsHomeComponent }, // or omit if not needed
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(m => m.ProductsModule),
  },
];
