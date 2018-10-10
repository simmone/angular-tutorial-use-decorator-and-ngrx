import { Action } from '@ngrx/store';

import { ShowSpinner, HideSpinner, ErrorTip, SuccessTip, NeedConfirm } from '../../core/decorators';

import {
  ConfirmActionTypes
} from '../../core/actions/confirm.actions';

export enum ExampleActionTypes {
  NormalTask = '[Example] NormalTask',
  NormalTaskSuccess = '[Example] NormalTaskSuccess',
  NormalTaskFailure = '[Example] NormalTaskFailure',

  ErrorTask = '[Example] ErrorTask',
  ErrorTaskSuccess = '[Example] ErrorTaskSuccess',
  ErrorTaskFailure = '[Example] ErrorTaskFailure',

  ConfirmTask = '[Example] ConfirmTask',
  ConfirmTaskSuccess = '[Example] ConfirmTaskSuccess',
  ConfirmTaskFailure = '[Example] ConfirmTaskFailure',
}

@ShowSpinner()
export class NormalTask implements Action {
  readonly type = ExampleActionTypes.NormalTask;
}

@HideSpinner(ExampleActionTypes.NormalTask)
@SuccessTip('Normal Task Complete Successfully!')
export class NormalTaskSuccess implements Action {
  readonly type = ExampleActionTypes.NormalTaskSuccess;
}

@HideSpinner(ExampleActionTypes.NormalTask)
@ErrorTip()
export class NormalTaskFailure implements Action {
  readonly type = ExampleActionTypes.NormalTaskFailure;

  constructor(public payload: string) {}
}

@ShowSpinner()
export class ErrorTask implements Action {
  readonly type = ExampleActionTypes.ErrorTask;
}

@HideSpinner(ExampleActionTypes.ErrorTask)
export class ErrorTaskSuccess implements Action {
  readonly type = ExampleActionTypes.ErrorTaskSuccess;
}

@HideSpinner(ExampleActionTypes.ErrorTask)
@ErrorTip()
export class ErrorTaskFailure implements Action {
  readonly type = ExampleActionTypes.ErrorTaskFailure;

  constructor(public payload: string) {}
}

@NeedConfirm('Are you sure?', 'ConfirmTask')
export class ConfirmTask implements Action {
  readonly type = ExampleActionTypes.ConfirmTask;
}

@HideSpinner(ConfirmActionTypes.SubmitConfirm)
@SuccessTip('Confirm Task Complete Successfully!')
export class ConfirmTaskSuccess implements Action {
  readonly type = ExampleActionTypes.ConfirmTaskSuccess;
}

@HideSpinner(ConfirmActionTypes.SubmitConfirm)
@ErrorTip()
export class ConfirmTaskFailure implements Action {
  readonly type = ExampleActionTypes.ConfirmTaskFailure;

  constructor(public payload: string) {}
}
