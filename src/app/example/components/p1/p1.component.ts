import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.scss']
})

export class P1Component implements OnInit {
  constructor() {};

  ngOnInit(): void {};

  @Output() normalSubmitted = new EventEmitter();

  onClickNormal():void {
    this.normalSubmitted.emit();
  }

  @Output() errorSubmitted = new EventEmitter();

  onClickError():void {
    this.errorSubmitted.emit();
  }

  @Output() confirmSubmitted = new EventEmitter();

  onClickConfirm():void {
    this.confirmSubmitted.emit();
  }
}
