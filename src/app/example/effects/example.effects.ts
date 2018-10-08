import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, pipe } from 'rxjs';
import { catchError, map, delay, switchMap } from 'rxjs/operators';

import * as fromExample from '../reducers';

import {
  ExampleActionTypes,
  NormalTask,
  NormalTaskSuccess,
  NormalTaskFailure,
} from '../actions/example.actions';

@Injectable()
export class ExampleEffects {

  @Effect()
  task$ = this.actions$.pipe(
    ofType<NormalTask>(ExampleActionTypes.NormalTask),
    switchMap( (item) => of('dummy').pipe(
      delay(2000),
      map( () => new NormalTaskSuccess() )) ),
    catchError(error => of(new NormalTaskFailure(error.message)))
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromExample.State>,
  ) {}
}
