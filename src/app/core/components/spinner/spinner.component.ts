import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-spinner-modal',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerModal implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {};

  public spinnerModalRef = null;

  @Input()
  set isLoading(isShow: boolean) {
    console.log(isShow);

    if ( isShow ) {
      setTimeout(() => this.spinnerModalRef = this.dialog.open(SpinnerModal));
    } else {
      if ( this.spinnerModalRef ) {
        this.spinnerModalRef.close();
      }
    }
  }
}



