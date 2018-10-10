import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { filter, map } from 'rxjs/operators';

import {
  ErrorTipActionTypes,
  ShowErrorTip,
} from '../actions/error-tip.actions';

@Injectable()
export class ErrorTipEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  tipError$ = this.actions$.pipe(
    filter((action: any) => action && action.errorTip ? action : null),
    map( (action: any) => new ShowErrorTip(action.payload) )
  );

}
