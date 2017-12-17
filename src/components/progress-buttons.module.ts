import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
} from '@angular/material';

// Imports
import { SpinnerButton } from './spinner-button.component';
import { BarButton } from './bar-button.component';
// Exports
export { SpinnerButton } from './spinner-button.component';
export { BarButton } from './bar-button.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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