import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

import { ErrorTipModal } from './error-tip.component';

@Component({
  selector: 'app-error-tip-modal-shell',
  templateUrl: './error-tip-shell.component.html'
})
export class ErrorTipModalShell implements OnInit {
  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {};

  @Input() errorMsg: string;

  @Output() hideErrorTipSubmitted = new EventEmitter();

  private errorTipModalRef = null;

  @Input()
  set showErrorTip(isShow: boolean) {
    if ( isShow ) {
      setTimeout( () =>
                  this.errorTipModalRef = this.bottomSheet.open(
                    ErrorTipModal,
                    {
                      data: { msg: this.errorMsg },
                    }
                  ));

      setTimeout( () => {
        this.hideErrorTipSubmitted.emit();
      }, 2000);
    } else {
      if ( this.errorTipModalRef ) {
        this.errorTipModalRef.dismiss();
      }
    }
  }
}

