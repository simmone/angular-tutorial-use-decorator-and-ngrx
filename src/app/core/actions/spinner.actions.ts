import { Action } from "@ngrx/store";

export enum SpinnerActionTypes {
  ShowSpinner = '[Spinner] ShowSpinner',
  HideSpinner = '[Spinner] HideSpinner',
}

export class ShowSpinner implements Action {
  readonly type = SpinnerActionTypes.ShowSpinner;

  constructor(public payload: Action) {}
}

export class HideSpinner implements Action {
  readonly type = SpinnerActionTypes.HideSpinner;

  constructor(public payload: Action) {}
}
