import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { MatButtonModule } from '@angular/material';

import { MainComponent } from './core/containers/main/main.component';

import { SpinnerModal } from './core/components/spinner/spinner.component';
import { SuccessTipModal } from './core/components/successTip/success-tip.component';
import { ErrorTipModal } from './core/components/errorTip/error-tip.component';
import { ConfirmModal } from './core/components/confirm/confirm.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { CustomRouterStateSerializer } from './shared/utils';

import { reducers, metaReducers } from './reducers';

import { routes } from './routes';

import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';

export const GLOBAL_COMPONENTS = [
  SuccessTipModal,
  ErrorTipModal,
  SpinnerModal,
  ConfirmModal
];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      name: 'Angular Tutorial DevTools',
      logOnly: environment.production,
    }),
    MatButtonModule, 
    EffectsModule.forRoot([]),
    CoreModule.forRoot()
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  entryComponents: GLOBAL_COMPONENTS,
  bootstrap: [MainComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
