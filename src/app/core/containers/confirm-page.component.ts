import { Component, OnInit } from '@angular/core';

import { Action, Store, select } from '@ngrx/store';

import * as ConfirmActions from '../actions/confirm.actions';
import * as fromCore from '../reducers';

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
  confirmQuestion$ = this.store.pipe(select(fromCore.getConfirmQuestion));
  showConfirm$ = this.store.pipe(select(fromCore.getShowConfirm));
  confirmAction$ = this.store.pipe(select(fromCore.getConfirmAction));

  constructor(private store: Store<fromCore.State>) {};

  ngOnInit() {};

  confirm($event: string) {
    this.store.dispatch(new ConfirmActions.SubmitConfirm($event));
  }

  close() {
    this.store.dispatch(new ConfirmActions.HideConfirm());
  }
}
