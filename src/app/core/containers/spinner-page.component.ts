import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as TipActions from '../actions/tip.actions';
import * as fromCore from '../reducers';

@Component({
  selector: 'app-spinner-page',
  template: `
    <app-spinner-modal
      [isLoading] = "isLoading$ | async"
    >
    </app-spinner-modal>
  `,
  styles: []
})
export class SpinnerPageComponent implements OnInit {
  isLoading$ = this.store.pipe(select(fromCore.isLoadingSpinnerActive));

  constructor(private store: Store<fromCore.State>) {};

  ngOnInit() {};
}
