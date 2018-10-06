import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ExampleComponent } from './containers/example.component';

import { ComponentsModule } from './components';

import { reducers } from './reducers';

import { ExampleEffects } from './effects/view.effects';

import { ExampleService } from './services/view.service';

export const COMPONENTS = [
  ExampleComponent
]

@NgModule({
  imports: [
    CommonModule, 
    ComponentsModule,
    RouterModule.forChild([
      { path: 'example', component: ExampleComponent },
    ]),
    StoreModule.forFeature('example', reducers),
    EffectsModule.forFeature([ExampleEffects]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [ExampleService]
})
export class ExampleModule {
  static forRoot() {
    return {
      ngModule: ExampleModule
    };
  }
}
