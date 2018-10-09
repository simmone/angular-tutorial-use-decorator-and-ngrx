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
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {};

  @Input() confirmQuestion: string;
  
  @Input() confirmAction: Action;

  public confirmModalRef = null;

  @Input()
  set showConfirm(isShow: boolean) {
    if( isShow ) {
      this.confirmModalRef = this.dialog.open(ConfirmModal);
    } else {
      if ( this.confirmModalRef ) {
        this.confirmModalRef.close();
      }
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
