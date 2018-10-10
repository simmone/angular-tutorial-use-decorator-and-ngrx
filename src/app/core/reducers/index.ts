import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
 } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromSuccessTip from './success-tip.reducer';
import * as fromErrorTip from './error-tip.reducer';
import * as fromConfirm from './confirm.reducer';
import * as fromSpinner from './spinner.reducer';

export interface ShareState {
  confirm: fromConfirm.State;
  spinner: fromSpinner.State;
  successTip: fromSuccessTip.State;
  errorTip: fromErrorTip.State;
}

export interface State extends fromRoot.State {
  share: ShareState;
}

export const reducers: ActionReducerMap<ShareState> = {
  confirm: fromConfirm.reducer,
  spinner: fromSpinner.reducer,
  successTip: fromSuccessTip.reducer,
  errorTip: fromErrorTip.reducer,
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

export const getSuccessTipState = createSelector(
  getShareState,
  (state: ShareState) => state.successTip
);

export const showSuccessTip = createSelector(
  getSuccessTipState,
  fromSuccessTip.showSuccessTip
);

export const successMsg = createSelector(
  getSuccessTipState,
  fromSuccessTip.successMsg
);

export const getErrorTipState = createSelector(
  getShareState,
  (state: ShareState) => state.errorTip
);

export const showErrorTip = createSelector(
  getErrorTipState,
  fromErrorTip.showErrorTip
);

export const errorMsg = createSelector(
  getErrorTipState,
  fromErrorTip.errorMsg
);
