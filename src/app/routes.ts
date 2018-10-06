import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/example', pathMatch: 'full' },
  {
    path: 'edit',
    loadChildren: './example/example.module#ExampleModule'
  },
];
