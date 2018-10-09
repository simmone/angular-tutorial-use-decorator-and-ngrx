import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromCore from '../reducers';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-spinner-page',
  template: `
    <app-spinner-modal-shell
      [isLoading] = "isLoading$ | async"
    >
    </app-spinner-modal-shell>
  `,
  styles: []
})
export class SpinnerPageComponent implements OnInit {
  isLoading$ = this.store.pipe(select(fromCore.isActive));

  constructor(private store: Store<fromCore.State>) {};

  ngOnInit() {};
}
