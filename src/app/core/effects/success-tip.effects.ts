import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { filter, map } from 'rxjs/operators';

import {
  SuccessTipActionTypes,
  ShowSuccessTip,
} from '../actions/success-tip.actions';

@Injectable()
export class SuccessTipEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  tipSuccess$ = this.actions$.pipe(
    filter((action: any) => action && action.successTip ? action : null),
    map( (action: any) => new ShowSuccessTip(action.successMsg) )
  );

}
