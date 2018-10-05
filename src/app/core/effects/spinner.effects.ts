import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';

import {
  SpinnerActionTypes,
  HideSpinner,
  ShowSpinner
} from '../actions/spinner.actions';

@Injectable()
export class SpinnerEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  showSpinner$ = this.actions$.pipe(
    filter((action: any) => action && action.showSpinner ? action : null),
    map( (action: any) => new ShowSpinner(action))
  );

  @Effect()
  hideSpinner$ = this.actions$.pipe(
    filter((action: any) => action && action.triggerAction ? action : null),
    map( (action: any) => new HideSpinner(action))
  );
}
