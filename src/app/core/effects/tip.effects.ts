import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';

import {
  TipActionTypes,
  ShowErrorTip,
  ShowSuccessTip,
} from '../actions/tip.actions';

@Injectable()
export class TipEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  tipError$ = this.actions$.pipe(
    filter((action: any) => action && action.errorTip ? action : null),
    map( (action: any) => new ShowErrorTip(action.payload) )
  );

  @Effect()
  tipSuccess$ = this.actions$.pipe(
    filter((action: any) => action && action.successTip ? action : null),
    map( (action: any) => new ShowSuccessTip(action.successMsg) )
  );

}
