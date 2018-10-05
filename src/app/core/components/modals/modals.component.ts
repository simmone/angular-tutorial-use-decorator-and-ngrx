import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})

export class ModalsComponent implements OnInit {
  @ViewChild('successTipModal') public successTipModal: any;
  @ViewChild('errorTipModal') public errorTipModal: any;
  @ViewChild('spinnerModal') public spinnerModal: any;
  
  constructor() {};

  ngOnInit(): void {};

  @Input() errorMsg: string;

  @Output() hideErrorTipSubmitted = new EventEmitter();

  @Input()
  set showErrorTip(isShow: boolean) {
    if ( isShow ) {
      this.errorTipModal.show();

      setTimeout( () => {
        this.hideErrorTipSubmitted.emit();
      }, 2000);
    } else {
      this.errorTipModal.hide();
    }
  }

  @Input() successMsg: string;

  @Output() hideSuccessTipSubmitted = new EventEmitter();

  @Input()
  set showSuccessTip(isShow: boolean) {
    if ( isShow ) {
      this.successTipModal.show();

      setTimeout( () => {
        this.hideSuccessTipSubmitted.emit();
      }, 2000);
    } else {
      this.successTipModal.hide();
    }
  }

  @Input()
  set isLoading(isShow: boolean) {
    if ( isShow ) {
      this.spinnerModal.show();
    } else {
      this.spinnerModal.hide();
    }
  }
}
