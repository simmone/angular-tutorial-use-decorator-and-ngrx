import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { MainComponent } from './main/main.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { CustomRouterStateSerializer } from './shared/utils';

import { reducers, metaReducers } from './reducers';

import { routes } from './routes';

import { environment } from '../environments/environment';

//import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    MainComponent
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
    MatCheckboxModule,
    EffectsModule.forRoot([]),
//    CoreModule.forRoot()
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [MainComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
