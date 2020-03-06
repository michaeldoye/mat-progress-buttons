import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

export interface MatProgressButtonOptions {
  active: boolean;
  text: string;
  spinnerText?: string;
  buttonColor?: ThemePalette;
  spinnerColor?: ThemePalette;
  barColor?: ThemePalette;
  raised?: boolean;
  stroked?: boolean;
  flat?: boolean;
  fab?: boolean;
  spinnerSize?: number;
  mode?: ProgressSpinnerMode;
  value?: number;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: MatProgressButtonIcon;
  type?: string;
  customClass?: string;
  buttonIcon?: MatProgressButtonIcon;
}

interface MatProgressButtonIcon {
  color?: ThemePalette;
  fontIcon?: string;
  fontSet?: string;
  inline?: boolean;
  svgIcon?: string;
  customClass?: string;
}
