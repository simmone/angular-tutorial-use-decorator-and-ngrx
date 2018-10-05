import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Action } from '@ngrx/store';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})

export class ConfirmComponent implements OnInit {
  @ViewChild('confirmModal') public confirmModal: any;
  
  constructor() {};

  ngOnInit(): void {};

  @Input() confirmQuestion: string;
  
  @Input() confirmAction: Action;

  @Input()
  set showConfirm(isShow: boolean) {
    if( isShow ) {
      this.confirmModal.show();
    } else {
      this.confirmModal.hide();
    }
  }

  @Output() confirmSubmitted = new EventEmitter<Action>();
  submit() {
    this.confirmSubmitted.emit(this.confirmAction);
  }

  @Output() closeSubmitted = new EventEmitter();
  close() {
    this.closeSubmitted.emit()
  }
}
