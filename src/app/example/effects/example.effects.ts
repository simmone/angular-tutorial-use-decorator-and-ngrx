import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, pipe } from 'rxjs';
import { filter, catchError, map, delay, switchMap, tap } from 'rxjs/operators';

import * as fromExample from '../reducers';

import {
  ExampleActionTypes,
  NormalTask,
  NormalTaskSuccess,
  NormalTaskFailure,
  ErrorTask,
  ErrorTaskSuccess,
  ErrorTaskFailure,
  ConfirmTask,
  ConfirmTaskSuccess,
  ConfirmTaskFailure,
} from '../actions/example.actions';

import {
  ConfirmActionTypes,
  SubmitConfirm
} from '../../core/actions/confirm.actions';

@Injectable()
export class ExampleEffects {

  @Effect()
  normalTask$ = this.actions$.pipe(
    ofType<NormalTask>(ExampleActionTypes.NormalTask),
    switchMap( (item) => of('dummy').pipe(
      delay(2000),
      map( () => new NormalTaskSuccess() )) ),
    catchError(error => of(new NormalTaskFailure(error.message)))
  );

  @Effect()
  errorTask$ = this.actions$.pipe(
    ofType<ErrorTask>(ExampleActionTypes.ErrorTask),
    switchMap( (item) => of('dummy').pipe(
      delay(2000),
      tap( () => { throw Error('something broken!') } ),
      map( () => new ErrorTaskSuccess() )) ),
    catchError(error => of(new ErrorTaskFailure(error.message)))
  );

  @Effect()
  confirmTask$ = this.actions$.pipe(
    ofType<SubmitConfirm>(ConfirmActionTypes.SubmitConfirm),
    filter( (action: any) => action.payload === 'ConfirmTask' ),
    switchMap( (item) => of('dummy').pipe(
      delay(2000),
      map( () => new ConfirmTaskSuccess() )) ),
    catchError(error => of(new ConfirmTaskFailure(error.message)))
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromExample.State>,
  ) {}
}
