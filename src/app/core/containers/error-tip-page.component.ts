import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as TipActions from '../actions/tip.actions';
import * as fromCore from '../reducers';

@Component({
  selector: 'app-error-tip-page',
  template: `
    <app-error-tip-modal
      [showErrorTip] = "showErrorTip$ | async"
      [errorMsg] = "errorMsg$ | async"
      (hideErrorTipSubmitted)="hideErrorTip()"
    >
    </app-error-tip-modal>
  `,
  styles: []
})
export class ErrorTipPageComponent implements OnInit {
  showErrorTip$ = this.store.pipe(select(fromCore.showErrorTip));
  errorMsg$ = this.store.pipe(select(fromCore.errorMsg));

  constructor(private store: Store<fromCore.State>) {};

  ngOnInit() {};

  hideErrorTip() {
    this.store.dispatch(new TipActions.HideErrorTip());
  }
}
