import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatSpinnerButtonComponent } from './component/spinner-button.component';
import { MatProgressButtonsService } from './service/mat-progress-buttons.service';

import {
  MatButtonModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
} from '@angular/material';

// Export module's public API
export { MatSpinnerButtonComponent } from './component/spinner-button.component';
export { MatProgressButtonsService } from './service/mat-progress-buttons.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule
  ],
  exports: [MatSpinnerButtonComponent],
  declarations: [MatSpinnerButtonComponent]
})
export class MatProgressButtonsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatProgressButtonsModule,
      providers: [MatProgressButtonsService]
    };
  }
}
