import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ErrorTipModal } from './error-tip.component';

@Component({
  selector: 'app-error-tip-modal-shell',
  templateUrl: './error-tip-shell.component.html'
})
export class ErrorTipModalShell implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {};

  @Input() errorMsg: string;

  @Output() hideErrorTipSubmitted = new EventEmitter();
  
  public errorTipModalRef = null;

  @Input()
  set showErrorTip(isShow: boolean) {
    if ( isShow ) {
      this.errorTipModalRef = this.dialog.open(ErrorTipModal);

      setTimeout( () => {
        this.hideErrorTipSubmitted.emit();
      }, 2000);
    } else {
      if ( this.errorTipModalRef ) {
        this.errorTipModalRef.close();
      }
    }
  }
}

