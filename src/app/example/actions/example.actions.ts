import { Action } from '@ngrx/store';

import { ShowSpinner, HideSpinner, ErrorTip, SuccessTip } from '../../shared/decorators';

export enum ExampleActionTypes {
  Task = '[Example] Task',
  TaskSuccess = '[Example] TaskSuccess',
  TaskFailure = '[Example] TaskFailure',
}

@ShowSpinner()
export class Task implements Action {
  readonly type = ExampleActionTypes.Task;
}

@HideSpinner(ExampleActionTypes.Task)
export class TaskSuccess implements Action {
  readonly type = ExampleActionTypes.TaskSuccess;
}

@HideSpinner(ExampleActionTypes.Task)
@ErrorTip()
export class TaskFailure implements Action {
  readonly type = ExampleActionTypes.TaskFailure;
}
