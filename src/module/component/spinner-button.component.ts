import { Component, Input } from '@angular/core';
import { MatProgressButtonOptions } from '../mat-progress-buttons.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class MatSpinnerButtonComponent {
  @Input() options: MatProgressButtonOptions;
}
