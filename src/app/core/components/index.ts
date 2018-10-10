import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { SuccessTipModal } from './successTip/success-tip.component';
import { SuccessTipModalShell } from './successTip/success-tip-shell.component';
import { SpinnerModal } from './spinner/spinner.component';
import { SpinnerModalShell } from './spinner/spinner-shell.component';
import { ErrorTipModal } from './errorTip/error-tip.component';
import { ErrorTipModalShell } from './errorTip/error-tip-shell.component';
import { ConfirmModal } from './confirm/confirm.component';
import { ConfirmModalShell } from './confirm/confirm-shell.component';

export const COMPONENTS = [
  SuccessTipModal,
  SuccessTipModalShell,
  ErrorTipModal,
  ErrorTipModalShell,
  SpinnerModal,
  SpinnerModalShell,
  ConfirmModal,
  ConfirmModalShell
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatBottomSheetModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  schemas: [NO_ERRORS_SCHEMA]
})
export class ComponentsModule {}
