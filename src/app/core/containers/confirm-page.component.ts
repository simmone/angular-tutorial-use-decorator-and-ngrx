import { Component, OnInit } from '@angular/core';

import { Action, Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { tap, take, switchMap, map } from 'rxjs/operators';

import * as ConfirmActions from '../actions/confirm.actions';
import * as fromTip from '../reducers';

@Component({
  selector: 'app-confirm-page',
  template: `
    <app-confirm-modal-shell
      [confirmQuestion] = "confirmQuestion$ | async"
      [confirmAction] = "confirmAction$ | async"
      [showConfirm] = "showConfirm$ | async"
      (confirmSubmitted) = "confirm($event)"
      (closeSubmitted) = "close()"
    >
    </app-confirm-modal-shell>
  `,
  styles: []
})
export class ConfirmPageComponent implements OnInit {
  confirmQuestion$ = this.store.pipe(select(fromTip.getConfirmQuestion));
  showConfirm$ = this.store.pipe(select(fromTip.getShowConfirm));
  confirmAction$ = this.store.pipe(select(fromTip.getConfirmAction));

  constructor(private store: Store<fromTip.State>) {};

  ngOnInit() {};
  
  confirm($event: string) {
    this.store.dispatch(new ConfirmActions.SubmitConfirm($event));
  }
  
  close() {
    this.store.dispatch(new ConfirmActions.HideConfirm());
  }
}
