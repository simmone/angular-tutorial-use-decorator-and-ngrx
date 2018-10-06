import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as TipActions from '../actions/tip.actions';
import * as fromCore from '../reducers';

@Component({
  selector: 'app-success-tip-page',
  template: `
    <app-success-tip-modal
      [showSuccessTip] = "showSuccessTip$ | async"
      [successMsg] = "successMsg$ | async"
      (hideSuccessTipSubmitted)="hideSuccessTip()"
    >
    </app-success-tip-modal>
  `,
  styles: []
})
export class SuccessTipPageComponent implements OnInit {
  showSuccessTip$ = this.store.pipe(select(fromCore.showSuccessTip));
  successMsg$ = this.store.pipe(select(fromCore.successMsg));

  constructor(private store: Store<fromCore.State>) {};

  ngOnInit() {};

  hideSuccessTip() {
    this.store.dispatch(new TipActions.HideSuccessTip());
  }
}
