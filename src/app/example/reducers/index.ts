import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
 } from '@ngrx/store';

import * as fromRoot from '../../reducers';

import * as fromExample from './example.reducer';

export interface ExampleState {
  es: fromExample.State;
};

export interface State extends fromRoot.State {
  example: ExampleState;
};

export const reducers: ActionReducerMap<ExampleState> = {
  es: fromComic.reducer
};

export const getExampleState = createFeatureSelector<ExampleState>('example');

export const getComicState = createSelector(
  getExampleState,
  (state: ExampleState) => state.es
);
