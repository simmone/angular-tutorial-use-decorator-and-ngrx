import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material';

import { P1Component } from './p1/p1.component';

export const COMPONENTS = [
  P1Component,
];

@NgModule({
  imports: [
    CommonModule, 
    MatButtonModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule {}
