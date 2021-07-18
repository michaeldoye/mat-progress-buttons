import { InjectionToken } from '@angular/core';
import { MatProgressButtonOptions } from './mat-progress-buttons.interface';

export interface Config extends MatProgressButtonOptions {
  id?: string;
}

export type GlobalConfig = Config[];

export const GLOBAL_CONFIG = new InjectionToken<GlobalConfig>('Global Config');
