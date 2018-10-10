import { Action } from "@ngrx/store";

export enum SuccessTipActionTypes {
  ShowSuccessTip = '[SuccessTip] ShowSuccessTip',
  HideSuccessTip = '[SuccessTip] HideSuccessTip',
}

export class ShowSuccessTip implements Action {
  readonly type = SuccessTipActionTypes.ShowSuccessTip;

  constructor(public payload: string) {}
}

export class HideSuccessTip implements Action {
  readonly type = SuccessTipActionTypes.HideSuccessTip;
}
