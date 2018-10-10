import { Action } from '@ngrx/store';

import { ShowSpinner } from '../decorators';

export enum ConfirmActionTypes {
  ShowConfirm = '[Confirm] ShowConfirm',
  HideConfirm = '[Confirm] HideConfirm',
  SubmitConfirm = '[Confirm] SubmitConfirm',
}

export class ShowConfirm implements Action {
  readonly type = ConfirmActionTypes.ShowConfirm;

  constructor(public question: string, public action: string) {}
}

export class HideConfirm implements Action {
  readonly type = ConfirmActionTypes.HideConfirm;
}

@ShowSpinner()
export class SubmitConfirm implements Action {
  readonly type = ConfirmActionTypes.SubmitConfirm;

  constructor(public payload: string) {}
}

