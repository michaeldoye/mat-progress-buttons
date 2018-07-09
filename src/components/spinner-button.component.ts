import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ButtonOpts } from './button-options.interface';

@Component({
  selector: 'spinner-button',
  template: `
    <button mat-button 
      (click)="btnClick($event)"
      [color]="options.buttonColor"     
      [class.active]="options.active"
      [class.fullWidth]="options.fullWidth"
      [class.mat-raised-button]="options.raised"
      [disabled]="options.active || options.disabled">

        <span>{{ options.text }}</span>

        <mat-spinner class="spinner" 
          [diameter]="options.spinnerSize"
          [color]="options.spinnerColor" 
          [mode]="options.mode"
          [value]="options.value"
          *ngIf="options.active">
        </mat-spinner>

    </button>
  `,
  styles: [`
    button /deep/ .mat-button-wrapper {
      display:flex; 
      align-items: center;
      justify-content: center;
    }
    button.active {cursor: not-allowed}
    .spinner {
      margin-top: 0px;
      margin-left: 5px;
    }
    .fullWidth {
      width: 100%;
    }
  `]
})
export class SpinnerButton {
  @Input() options: ButtonOpts;
  @Output() onClick = new EventEmitter();
  btnClick(e): void {
    this.onClick.emit(e);
  }
}
