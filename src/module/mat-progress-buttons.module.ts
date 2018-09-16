import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LibComponent } from './component/mat-progress-buttons.component';
import { MatProgressButtonsService } from './service/mat-progress-buttons.service';

import {
  MatButtonModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
} from '@angular/material';

// Export module's public API
export { LibComponent } from './component/mat-progress-buttons.component';
export { MatProgressButtonsService } from './service/mat-progress-buttons.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule
  ],
  exports: [LibComponent],
  declarations: [LibComponent]
})
export class MatProgressButtonsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatProgressButtonsModule,
      providers: [MatProgressButtonsService]
    };
  }
}
