import { Action } from "@ngrx/store";

export enum TipActionTypes {
  ShowErrorTip = '[Tip] ShowErrorTip',
  HideErrorTip = '[Tip] HideErrorTip',
  ShowSuccessTip = '[Tip] ShowSuccessTip',
  HideSuccessTip = '[Tip] HideSuccessTip',
}

export class ShowErrorTip implements Action {
  readonly type = TipActionTypes.ShowErrorTip;

  constructor(public payload: string) {}
}

export class HideErrorTip implements Action {
  readonly type = TipActionTypes.HideErrorTip;
}

export class ShowSuccessTip implements Action {
  readonly type = TipActionTypes.ShowSuccessTip;

  constructor(public payload: string) {}
}

export class HideSuccessTip implements Action {
  readonly type = TipActionTypes.HideSuccessTip;
}
