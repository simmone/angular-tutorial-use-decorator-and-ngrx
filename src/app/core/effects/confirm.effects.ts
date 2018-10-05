import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';

import { ShowConfirm } from '../actions/confirm.actions';

@Injectable()
export class ConfirmEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  showConfirm$ = this.actions$.pipe(
    filter((action: any) => 
           action && 
           action.confirmQuestion ? action : false && 
           action.confirmAction ? action : false && 
           !(action.yesno ? action : false)),
    map( (action: any) => new ShowConfirm(action.confirmQuestion, action.confirmAction) )
  );
}
