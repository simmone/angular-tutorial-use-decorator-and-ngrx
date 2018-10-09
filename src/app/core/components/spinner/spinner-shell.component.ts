import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { SpinnerModal } from './spinner.component';

@Component({
  selector: 'app-spinner-modal-shell',
  templateUrl: './spinner-shell.component.html'
})
export class SpinnerModalShell implements OnInit {
  constructor(
    public dialog: MatDialog, 
  ) {}

  ngOnInit(): void {};

  public spinnerModalRef = null;

  @Input()
  set isLoading(isShow: boolean) {
    if ( isShow ) {
      setTimeout( () => this.spinnerModalRef = 
                    this.dialog.open(
                      SpinnerModal, 
                      {
                        panelClass: 'transparent',
                      }));
    } else {
      if ( this.spinnerModalRef ) {
        this.spinnerModalRef.close();
      }
    }
  }
}



