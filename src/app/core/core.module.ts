import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components';

import { MainComponent } from './containers/main/main.component';

import { SuccessTipPageComponent } from './containers/success-tip-page.component';
import { ErrorTipPageComponent } from './containers/error-tip-page.component';
import { SpinnerPageComponent } from './containers/spinner-page.component';
import { ConfirmPageComponent } from './containers/confirm-page.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

import { SuccessTipEffects } from './effects/success-tip.effects';
import { ErrorTipEffects } from './effects/error-tip.effects';
import { ConfirmEffects } from './effects/confirm.effects';
import { SpinnerEffects } from './effects/spinner.effects';

import { reducers } from './reducers';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export const COMPONENTS = [
  MainComponent,
  SuccessTipPageComponent,
  ErrorTipPageComponent,
  SpinnerPageComponent,
  ConfirmPageComponent,
  PageNotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    StoreModule.forFeature('share', reducers),
    EffectsModule.forFeature([SuccessTipEffects, ErrorTipEffects, ConfirmEffects, SpinnerEffects]),
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
