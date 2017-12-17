import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar-button',
  template: `
    <button mat-raised-button 
      [color]="options.buttonColor" 
      [class.active]="options.active"
      [disabled]="options.active">

        <span>{{ options.text }}</span>

        <mat-progress-bar
          *ngIf="options.active"
          [color]="options.spinnerColor"
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
  @Input() options: any;
}

