import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Action } from '@ngrx/store';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmModal implements OnInit {
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
