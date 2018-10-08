import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
 } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromTip from './tip.reducer';
import * as fromConfirm from './confirm.reducer';
import * as fromSpinner from './spinner.reducer';

export interface ShareState {
  confirm: fromConfirm.State;
  spinner: fromSpinner.State;
  tip: fromTip.State;
}

export interface State extends fromRoot.State {
  share: ShareState;
}

export const reducers: ActionReducerMap<ShareState> = {
  confirm: fromConfirm.reducer,
  spinner: fromSpinner.reducer,
  tip: fromTip.reducer
};

export const getShareState = createFeatureSelector<ShareState>('share');

export const getShareConfirmState = createSelector(
  getShareState,
  (state: ShareState) => state.confirm
);

export const getConfirmQuestion = createSelector(
  getShareConfirmState,
  fromConfirm.getConfirmQuestion
);

export const getShowConfirm = createSelector(
  getShareConfirmState,
  fromConfirm.getShowConfirm
);

export const getConfirmAction = createSelector(
  getShareConfirmState,
  fromConfirm.getConfirmAction
);

export const getSpinnerState = createSelector(
  getShareState,
  (state: ShareState) => state.spinner
);

export const isActive = createSelector(
  getSpinnerState,
  fromSpinner.isActive
);

export const getTipState = createSelector(
  getShareState,
  (state: ShareState) => state.tip
);

export const showErrorTip = createSelector(
  getTipState,
  fromTip.showErrorTip
);

export const errorMsg = createSelector(
  getTipState,
  fromTip.errorMsg
);

export const showSuccessTip = createSelector(
  getTipState,
  fromTip.showSuccessTip
);

export const successMsg = createSelector(
  getTipState,
  fromTip.successMsg
);


