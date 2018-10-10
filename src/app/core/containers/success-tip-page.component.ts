import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as SuccessTipActions from '../actions/success-tip.actions';
import * as fromCore from '../reducers';

@Component({
  selector: 'app-success-tip-page',
  template: `
    <app-success-tip-modal-shell
      [showSuccessTip] = "showSuccessTip$ | async"
      [successMsg] = "successMsg$ | async"
      (hideSuccessTipSubmitted)="hideSuccessTip()"
    >
    </app-success-tip-modal-shell>
  `,
  styles: []
})
export class SuccessTipPageComponent implements OnInit {
  showSuccessTip$ = this.store.pipe(select(fromCore.showSuccessTip));
  successMsg$ = this.store.pipe(select(fromCore.successMsg));

  constructor(private store: Store<fromCore.State>) {};

  ngOnInit() {};

  hideSuccessTip() {
    this.store.dispatch(new SuccessTipActions.HideSuccessTip());
  }
}
