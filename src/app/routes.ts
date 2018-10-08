import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/containers/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/example', pathMatch: 'full' },
  {
    path: 'example',
    loadChildren: './example/example.module#ExampleModule',
  },
  { path: '**', component: PageNotFoundComponent }
];
