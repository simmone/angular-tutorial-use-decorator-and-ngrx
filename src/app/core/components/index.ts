import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatDialogModule } from '@angular/material';

import { SuccessTipModal } from './successTip/success-tip.component';
import { ErrorTipModal } from './errorTip/error-tip.component';
import { SpinnerModal } from './spinner/spinner.component';
import { ConfirmModal } from './confirm/confirm.component';

export const COMPONENTS = [
  SuccessTipModal,
  ErrorTipModal,
  SpinnerModal,
  ConfirmModal
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
