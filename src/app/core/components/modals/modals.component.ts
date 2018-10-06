import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tip-modal',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
  ) {}

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

  @Input() successMsg: string;

  @Output() hideSuccessTipSubmitted = new EventEmitter();

  public successTipModalRef = null;

  @Input()
  set showSuccessTip(isShow: boolean) {
    if ( isShow ) {
      this.successTipModalRef = this.dialog.open(SuccessTipModal);

      setTimeout( () => {
        this.hideSuccessTipSubmitted.emit();
      }, 2000);
    } else {
      if ( this.successTipModalRef ) {
        this.successTipModalRef.close();
      }
    }
  }

  public spinnerModalRef = null;

  @Input()
  set isLoading(isShow: boolean) {
    if ( isShow ) {
      this.spinnerModalRef = this.dialog.open(SpinnerModal);
    } else {
      if ( this.spinnerModalRef ) {
        this.spinnerModalRef.close();
      }
    }
  }
}

@Component({
  selector: 'spinner-modal',
  templateUrl: 'spinner-modal.component.html',
})
export class SpinnerModal {}

@Component({
  selector: 'successTip-modal',
  templateUrl: 'successTip-modal.component.html',
})
export class SuccessTipModal {}

@Component({
  selector: 'errorTip-modal',
  templateUrl: 'errorTip-modal.component.html',
})
export class ErrorTipModal {}


