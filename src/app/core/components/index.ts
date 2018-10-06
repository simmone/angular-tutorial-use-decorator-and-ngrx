import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatDialogModule } from '@angular/material';

import { ModalsComponent } from './modals/modals.component';
import { ConfirmComponent } from './confirm/confirm.component';

export const COMPONENTS = [
  ModalsComponent,
  ConfirmComponent
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  schemas: [NO_ERRORS_SCHEMA]
})
export class ComponentsModule {}
