import { Component, OnInit, Inject } from '@angular/core';

import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';


@Component({
  selector: 'app-success-tip-modal',
  templateUrl: './success-tip.component.html',
  styleUrls: ['./success-tip.component.scss']
})
export class SuccessTipModal implements OnInit {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {};
}

