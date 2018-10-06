import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components';

import { SuccessTipPageComponent } from './containers/success-tip-page.component';
import { ErrorTipPageComponent } from './containers/error-tip-page.component';
import { SpinnerPageComponent } from './containers/spinner-page.component';
import { ConfirmPageComponent } from './containers/confirm-page.component';

import { TipEffects } from './effects/tip.effects';
import { ConfirmEffects } from './effects/confirm.effects';
import { SpinnerEffects } from './effects/spinner.effects';

import { reducers } from './reducers';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export const COMPONENTS = [
  SuccessTipPageComponent,
  ErrorTipPageComponent,
  SpinnerPageComponent,
  ConfirmPageComponent
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    ComponentsModule,
    StoreModule.forFeature('share', reducers),
    EffectsModule.forFeature([TipEffects, ConfirmEffects, SpinnerEffects]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: []
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}
