import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {};

  @Input() errorMsg: string;

  @Output() hideErrorTipSubmitted = new EventEmitter();

  @Input()
  set showErrorTip(isShow: boolean) {
    let dialogRef = null;

    if ( isShow ) {
      dialogRef = this.dialog.open(ErrorTipModal);

      setTimeout( () => {
        this.hideErrorTipSubmitted.emit();
      }, 2000);
    } else {
      dialogRef.close();
    }
  }

  @Input() successMsg: string;

  @Output() hideSuccessTipSubmitted = new EventEmitter();

  @Input()
  set showSuccessTip(isShow: boolean) {
    let dialogRef = null;

    if ( isShow ) {
      dialogRef = this.dialog.open(SuccessTipModal);

      setTimeout( () => {
        this.hideSuccessTipSubmitted.emit();
      }, 2000);
    } else {
      dialogRef.close();
    }
  }

  @Input()
  set isLoading(isShow: boolean) {
    let dialogRef = null;

    if ( isShow ) {
      dialogRef = this.dialog.open(SpinnerModal);
    } else {
      dialogRef.close();
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


