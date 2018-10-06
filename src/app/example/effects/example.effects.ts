import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import * as fromExample from '../reducers';

import {
  ExampleActionTypes,
  Task,
  TaskSuccess,
  TaskFailure,
} from '../actions/example.actions';

@Injectable()
export class ExampleEffects {

  @Effect()
  task$ = this.actions$.pipe(
    ofType<Task>(ExampleActionTypes.Task),
    map( () => new TaskSuccess() ),
    catchError(error => of(new TaskFailure()))
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromExample.State>,
  ) {}
}
