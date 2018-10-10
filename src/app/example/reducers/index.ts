import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
 } from '@ngrx/store';

import * as fromRoot from '../../reducers';

import * as fromExample from './example.reducer';

export interface ExampleState {
  dummy: fromExample.State;
};

export interface State extends fromRoot.State {
  example: ExampleState;
};

export const reducers: ActionReducerMap<ExampleState> = {
  dummy: fromExample.reducer
};

export const getExampleState = createFeatureSelector<ExampleState>('example');

export const getEsState = createSelector(
  getExampleState,
  (state: ExampleState) => state.dummy
);

export const getResult = createSelector(
  getEsState,
  fromExample.getResult
);


