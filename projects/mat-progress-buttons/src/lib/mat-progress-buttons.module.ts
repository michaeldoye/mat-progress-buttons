import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatSpinnerButtonComponent } from './component/spinner-button/spinner-button.component';
import { MatBarButtonComponent } from './component/bar-button/bar-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { GLOBAL_CONFIG, GlobalConfig } from './mat-progress-buttons.injection-token';

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
    MatIconModule,
  ],
  exports: [MatSpinnerButtonComponent, MatBarButtonComponent],
  declarations: [MatSpinnerButtonComponent, MatBarButtonComponent],
})
export class MatProgressButtonsModule {
  static forRoot(
    config?: GlobalConfig
  ): ModuleWithProviders<MatProgressButtonsModule> {
    return {
      ngModule: MatProgressButtonsModule,
      providers: [{ provide: GLOBAL_CONFIG, useValue: config }],
    };
  }
}
