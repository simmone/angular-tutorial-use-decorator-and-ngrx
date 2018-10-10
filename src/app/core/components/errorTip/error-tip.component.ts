import { Component, OnInit, Inject } from '@angular/core';

import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-error-tip-modal',
  templateUrl: './error-tip.component.html',
  styleUrls: ['./error-tip.component.scss']
})
export class ErrorTipModal implements OnInit {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {};
}

