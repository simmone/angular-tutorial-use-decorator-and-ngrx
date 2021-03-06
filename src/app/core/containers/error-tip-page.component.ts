import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as ErrorTipActions from '../actions/error-tip.actions';
import * as fromCore from '../reducers';

@Component({
  selector: 'app-error-tip-page',
  template: `
    <app-error-tip-modal-shell
      [showErrorTip] = "showErrorTip$ | async"
      [errorMsg] = "errorMsg$ | async"
      (hideErrorTipSubmitted)="hideErrorTip()"
    >
    </app-error-tip-modal-shell>
  `,
  styles: []
})
export class ErrorTipPageComponent implements OnInit {
  showErrorTip$ = this.store.pipe(select(fromCore.showErrorTip));
  errorMsg$ = this.store.pipe(select(fromCore.errorMsg));

  constructor(private store: Store<fromCore.State>) {};

  ngOnInit() {};

  hideErrorTip() {
    this.store.dispatch(new ErrorTipActions.HideErrorTip());
  }
}
