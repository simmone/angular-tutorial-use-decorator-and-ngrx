import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { SuccessTipModal } from './success-tip.component';

@Component({
  selector: 'app-success-tip-modal-shell',
  templateUrl: './success-tip-shell.component.html',
})
export class SuccessTipModalShell implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {};

  @Input() successMsg: string;

  @Output() hideSuccessTipSubmitted = new EventEmitter();

  public successTipModalRef = null;

  @Input()
  set showSuccessTip(isShow: boolean) {
    if ( isShow ) {
      setTimeout(() => this.successTipModalRef = this.dialog.open(SuccessTipModal));

      setTimeout( () => {
        this.hideSuccessTipSubmitted.emit();
      }, 2000);
    } else {
      if ( this.successTipModalRef ) {
        this.successTipModalRef.close();
      }
    }
  }
}

