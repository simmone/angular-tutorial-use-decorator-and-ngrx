import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Action } from '@ngrx/store';

import { ConfirmModal } from './confirm.component';

@Component({
  selector: 'app-confirm-modal-shell',
  templateUrl: './confirm-shell.component.html'
})
export class ConfirmModalShell implements OnInit {
  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {};

  @Input() confirmQuestion: string;

  @Input() confirmAction: Action;

  private confirmModalRef = null;

  @Input()
  set showConfirm(isShow: boolean) {
    if( isShow ) {
      setTimeout( () =>
                  this.confirmModalRef = this.dialog.open(
                    ConfirmModal,
                    {
                      data: { question: this.confirmQuestion, action: this.confirmAction },
                    }
                  ).afterClosed()
                  .subscribe(response => {
                    this.closeWindow();

                    if ( response && response.result === 'yes' ) {
                      this.submit();
                    }
                  }));
    }
  }

  @Output() confirmSubmitted = new EventEmitter<Action>();
  submit() {
    this.confirmSubmitted.emit(this.confirmAction);
  }

  @Output() closeSubmitted = new EventEmitter();
  closeWindow() {
    this.closeSubmitted.emit()
  }
}
