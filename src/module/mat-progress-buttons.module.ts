import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatSpinnerButtonComponent } from './component/spinner-button.component';
import { MatBarButtonComponent } from './component/bar-button.component';

import {
  MatButtonModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatIconModule,
} from '@angular/material';
import {MatProgressButtonOptions} from './mat-progress-buttons.interface';

// Export module's public API
export { MatSpinnerButtonComponent } from './component/spinner-button.component';
export { MatBarButtonComponent } from './component/bar-button.component';
export { MatProgressButtonOptions } from './mat-progress-buttons.interface';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatIconModule
  ],
  exports: [
    MatSpinnerButtonComponent,
    MatBarButtonComponent
  ],
  declarations: [
    MatSpinnerButtonComponent,
    MatBarButtonComponent
  ]
})
export class MatProgressButtonsModule {
  static forRoot(defaultOpts?: MatProgressButtonOptions): ModuleWithProviders {
    return {
      ngModule: MatProgressButtonsModule,
      providers: [{provide: 'defaultOptions', useValue: defaultOpts}]
    };
  }
}
