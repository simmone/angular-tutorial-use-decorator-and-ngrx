import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatButtonModule } from '@angular/material';

import { ExampleComponent } from './containers/example.component';

import { ComponentsModule } from './components';

import { reducers } from './reducers';

import { ExampleEffects } from './effects/example.effects';

export const COMPONENTS = [
  ExampleComponent
]

@NgModule({
  imports: [
    CommonModule, 
    MatButtonModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: ExampleComponent },
    ]),
    StoreModule.forFeature('example', reducers),
    EffectsModule.forFeature([ExampleEffects]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: []
})
export class ExampleModule {
  static forRoot() {
    return {
      ngModule: ExampleModule
    };
  }
}
