import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
} from '@angular/material';

import { SpinnerButton } from './spinner-button.component';
import { BarButton } from './bar-button.component';

export { SpinnerButton } from './spinner-button.component';
export { BarButton } from './bar-button.component';
export { ButtonOpts } from './button-options.interface';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule
  ],
  declarations: [
    SpinnerButton,
    BarButton
  ],
  exports: [
    SpinnerButton,
    BarButton
  ]
})
export class MatProgressButtons {}