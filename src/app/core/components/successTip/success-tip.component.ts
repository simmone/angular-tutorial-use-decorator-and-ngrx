import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-success-tip-modal',
  templateUrl: './success-tip.component.html',
  styleUrls: ['./success-tip.component.scss']
})
export class SuccessTipModal implements OnInit {
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

