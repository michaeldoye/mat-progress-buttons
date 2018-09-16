import { Component, Input } from '@angular/core';
import { MatProgressButtonOptions } from '../mat-progress-buttons.interface.';

@Component({
  selector: 'mpb-component',
  templateUrl: './mat-progress-buttons.component.html',
  styleUrls: ['./mat-progress-buttons.component.scss']
})
export class LibComponent {
  @Input() options: MatProgressButtonOptions;
}
