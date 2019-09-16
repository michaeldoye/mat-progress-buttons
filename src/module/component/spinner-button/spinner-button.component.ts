import { Component, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { MatProgressButtonOptions } from '../../mat-progress-buttons.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class MatSpinnerButtonComponent {
  @Input() options: MatProgressButtonOptions;
  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    if (!this.options.disabled && !this.options.active) {
      this.btnClick.emit(event);
    }
  }
}
