import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: '/example', 
    pathMatch: 'full',
    loadChildren: './example/example.module#ExampleModule'
  },
];
