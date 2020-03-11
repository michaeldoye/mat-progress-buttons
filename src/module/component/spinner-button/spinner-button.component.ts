import { Component, Input, Output, HostListener, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatProgressButtonOptions } from '../../mat-progress-buttons.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class MatSpinnerButtonComponent implements OnChanges {
  @Input() options: MatProgressButtonOptions;
  @Input() active: boolean;
  @Input() disabled: boolean;

  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    if (!this.options.disabled && !this.options.active) {
      this.btnClick.emit(event);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.active) {
      this.options.active = changes.active.currentValue;
    }
    if (changes.disabled) {
      this.options.disabled = changes.disabled.currentValue;
    }
  }
}
