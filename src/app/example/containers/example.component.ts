import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromExample from '../reducers';

import * as ExampleActions from '../actions/example.actions';

@Component({
  selector: 'app-example-container',
  template: `
    <app-p1
      (normalSubmitted)="normal()"
      (errorSubmitted)="error()"
      (confirmSubmitted)="confirm()"
    >
    </app-p1>
  `,
  styles: []
})

export class ExampleComponent implements OnInit {
  constructor(
    private exampleStore: Store<fromExample.State>,
  ) {};

  ngOnInit() {}

  normal() {
    this.exampleStore.dispatch(new ExampleActions.NormalTask());
  }

  error() {
    this.exampleStore.dispatch(new ExampleActions.ErrorTask());
  }

  confirm() {
    this.exampleStore.dispatch(new ExampleActions.ConfirmTask());
  }
}
