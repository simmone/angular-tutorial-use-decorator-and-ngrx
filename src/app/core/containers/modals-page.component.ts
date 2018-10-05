import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as TipActions from '../actions/tip.actions';
import * as fromCore from '../reducers';

@Component({
  selector: 'app-tip-page',
  template: `
    <app-modal
      [isLoading] = "isLoading$ | async"
      [showSuccessTip] = "showSuccessTip$ | async"
      [successMsg] = "successMsg$ | async"
      (hideSuccessTipSubmitted)="hideSuccessTip()"
      [showErrorTip] = "showErrorTip$ | async"
      [errorMsg] = "errorMsg$ | async"
      (hideErrorTipSubmitted)="hideErrorTip()"
    >
    </app-modal>
  `,
  styles: []
})

export class ModalsPageComponent implements OnInit {
  isLoading$ = this.store.pipe(select(fromCore.isLoadingSpinnerActive));

  showErrorTip$ = this.store.pipe(select(fromCore.showErrorTip));
  errorMsg$ = this.store.pipe(select(fromCore.errorMsg));

  showSuccessTip$ = this.store.pipe(select(fromCore.showSuccessTip));
  successMsg$ = this.store.pipe(select(fromCore.successMsg));

  constructor(private store: Store<fromCore.State>) {};

  ngOnInit() {};

  hideErrorTip() {
    this.store.dispatch(new TipActions.HideErrorTip());
  }

  hideSuccessTip() {
    this.store.dispatch(new TipActions.HideSuccessTip());
  }
}
