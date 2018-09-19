import { Component, Input } from '@angular/core';
import { MatProgressButtonOptions } from '../mat-progress-buttons.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-bar-button',
  templateUrl: './bar-button.component.html',
  styleUrls: ['./bar-button.component.scss']
})
export class MatBarButtonComponent {
  @Input() options: MatProgressButtonOptions;
}
