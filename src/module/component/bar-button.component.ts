import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { MatProgressButtonOptions } from '../mat-progress-buttons.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-bar-button',
  templateUrl: './bar-button.component.html',
  styleUrls: ['./bar-button.component.scss']
})
export class MatBarButtonComponent {
  @Input() options: MatProgressButtonOptions;
  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    // tslint:disable-next-line: no-unused-expression
    return !this.options.disabled && this.btnClick.emit(event);
  }
}
