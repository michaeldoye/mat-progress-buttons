import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner-button',
  template: `
    <button mat-raised-button 
      [color]="options.buttonColor"     
      [class.active]="options.active"
      [disabled]="options.active">

        <span>{{ options.text }}</span>

        <mat-spinner class="spinner" 
          [diameter]="options.spinnerSize"
          [color]="options.spinnerColor" 
          *ngIf="options.active">
        </mat-spinner>

    </button>
  `,
  styles: [`
    button /deep/ .mat-button-wrapper {display:flex;}
    button.active {cursor: not-allowed;}
    .spinner {
      margin-top: 8px;
      margin-left: 5px;
    }
  `]
})
export class SpinnerButton {
  @Input() options: any;
}