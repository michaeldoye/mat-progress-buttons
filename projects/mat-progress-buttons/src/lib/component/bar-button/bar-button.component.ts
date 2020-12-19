import { Component, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { MatProgressButtonOptions } from '../../mat-progress-buttons.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-bar-button',
  templateUrl: './bar-button.component.html',
  styleUrls: ['./bar-button.component.scss']
})
export class MatBarButtonComponent implements OnChanges {
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
