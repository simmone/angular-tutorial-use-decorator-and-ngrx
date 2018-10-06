import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromExample from '../reducers';

import * as ExampleActions from '../actions/example.actions';

@Component({
  selector: 'app-example',
  template: '',
  styles: []
})

export class ExampleComponent implements OnInit {
  constructor(
    private exampleStore: Store<fromExample.State>,
  ) {};

  ngOnInit() {}
}
