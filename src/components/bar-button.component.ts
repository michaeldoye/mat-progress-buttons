import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ButtonOpts } from './button-options.interface';

@Component({
  selector: 'progress-bar-button',
  template: `
    <button mat-button
      (click)="btnClick($event)"
      [color]="options.buttonColor" 
      [class.active]="options.active"
      [class.mat-raised-button]="options.raised"
      [disabled]="options.active || options.disabled">

        <span>{{ options.text }}</span>

        <mat-progress-bar
          *ngIf="options.active"
          [color]="options.barColor"
          class="bar" 
          [mode]="options.mode"
          [value]="options.value">
        </mat-progress-bar>
        
    </button>
  `,
  styles: [`
    button.active {cursor: not-allowed}
    .bar {
      position:absolute;
      top:0px;
      left: 0px;
    }
  `]
})
export class BarButton {
  @Input() options: ButtonOpts;
  @Output() onClick = new EventEmitter();
  btnClick(e): void {
    this.onClick.emit(e);
  }
}