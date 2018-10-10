import { Action } from "@ngrx/store";

export enum ErrorTipActionTypes {
  ShowErrorTip = '[ErrorTip] ShowErrorTip',
  HideErrorTip = '[ErrorTip] HideErrorTip',
}

export class ShowErrorTip implements Action {
  readonly type = ErrorTipActionTypes.ShowErrorTip;

  constructor(public payload: string) {}
}

export class HideErrorTip implements Action {
  readonly type = ErrorTipActionTypes.HideErrorTip;
}
