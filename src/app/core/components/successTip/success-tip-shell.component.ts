import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

import { SuccessTipModal } from './success-tip.component';

@Component({
  selector: 'app-success-tip-modal-shell',
  templateUrl: './success-tip-shell.component.html',
})
export class SuccessTipModalShell implements OnInit {
  constructor(public dialog: MatBottomSheet) {}

  ngOnInit(): void {};

  @Input() successMsg: string;

  @Output() hideSuccessTipSubmitted = new EventEmitter();

  public successTipModalRef = null;

  @Input()
  set showSuccessTip(isShow: boolean) {
    if ( isShow ) {
      setTimeout( () => 
                  this.successTipModalRef = this.dialog.open(
                    SuccessTipModal,
                    {
                      data: { msg: this.successMsg },
                    }
                  ));

      setTimeout( () => {
        this.hideSuccessTipSubmitted.emit();
      }, 2000);
    } else {
      if ( this.successTipModalRef ) {
        this.successTipModalRef.dismiss();
      }
    }
  }
}

