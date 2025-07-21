const routes: Routes = [
  {
    path: 'individuals',
    loadChildren: () =>
      import('./domains/content/individuals/individuals.module').then(
        (m) => m.IndividualsModule
      ),
  },
];
