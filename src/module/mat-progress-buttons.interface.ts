import { ProgressSpinnerMode, ThemePalette } from '@angular/material';

export interface MatProgressButtonOptions {
  /** Whether the button is currently active (progress should show). */
  active: boolean;
  /** The button anchor text */
  text?: string;
  /** Theme color of the button (primary, warn, accent). */
  buttonColor?: ThemePalette;
  /** Theme color of the spinner (primary, warn, accent). */
  spinnerColor?: ThemePalette;
  /** Theme color of the progress bar (primary, warn, accent). */
  barColor?: ThemePalette;
  /** mat-raised-button */
  raised?: boolean;
  /** mat-stroked-button */
  stroked?: boolean;
  /** mat-flat-button */
  flat?: boolean;
  /** mat-fab-button */
  fab?: boolean;
  /** The size of the spinner for the spinner button */
  spinnerSize?: number;
  /** Progress Mode (determinate, indeterminate)*/
  mode?: ProgressSpinnerMode;
  /** Value for determinate progress */
  value?: number;
  /** Whether the button should be full width */
  fullWidth?: boolean;
  /** Whether the button is disabled*/
  disabled?: boolean;
  /** For fab: true only - the icon to be used for fab button */
  icon?: string;
  /** The button type, eg: 'submit' */
  type?: string;
  /** Whether the MatRipple should be disabled */
  disableRipple?: boolean
}
