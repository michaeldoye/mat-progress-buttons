import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatSpinnerButtonComponent } from './component/spinner-button/spinner-button.component';
import { MatBarButtonComponent } from './component/bar-button/bar-button.component';

import {
  MatButtonModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatIconModule,
} from '@angular/material';

// Export module's public API
export { MatSpinnerButtonComponent } from './component/spinner-button/spinner-button.component';
export { MatBarButtonComponent } from './component/bar-button/bar-button.component';
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
  static forRoot(): ModuleWithProviders<MatProgressButtonsModule> {
    return {
      ngModule: MatProgressButtonsModule
    };
  }
}
